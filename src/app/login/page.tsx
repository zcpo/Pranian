
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock } from 'lucide-react';
import { useAuth, useFirestore } from '@/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const signUpSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;
type SignInFormValues = z.infer<typeof signInSchema>;

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.657-3.657-11.303-8H6.306C9.656,39.663,16.318,44,24,44z" />
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.012,35.846,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
  );
}

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const isTrial = searchParams.get('trial') === 'true';
  const isSubscribing = searchParams.get('subscribe') === 'true';
  const defaultTab = isSubscribing || isTrial ? 'signup' : 'signin';

  const {
    register: registerSignUp,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpErrors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const {
    register: registerSignIn,
    handleSubmit: handleSignInSubmit,
    formState: { errors: signInErrors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const handleUserCreation = async (user: User) => {
    if (!firestore) return;
    const userDocRef = doc(firestore, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      const data = {
        id: user.uid,
        email: user.email,
        displayName: user.displayName || user.email?.split('@')[0] || 'Pranian User',
        avatarUrl: user.photoURL,
      };
      await setDoc(userDocRef, data, { merge: true });
    }
  };

  const onSignUp: SubmitHandler<SignUpFormValues> = async (data) => {
    if (!auth) return;
    setError(null);
    setIsSubmitting(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await handleUserCreation(userCredential.user);
      toast({ title: 'Success!', description: 'Your account has been created.' });
      router.push('/profile');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSignIn: SubmitHandler<SignInFormValues> = async (data) => {
    if (!auth) return;
    setError(null);
    setIsSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast({ title: 'Success!', description: 'You are now signed in.' });
      router.push('/profile');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!auth) return;
    setError(null);
    setIsSubmitting(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await handleUserCreation(result.user);
      toast({ title: 'Success!', description: 'You are now signed in.' });
      router.push('/profile');
    } catch (err: any) {
      setError(err.message);
      toast({
        variant: 'destructive',
        title: 'Sign-in Failed',
        description: err.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const FormError = ({ message }: { message?: string }) =>
    message ? <p className="text-destructive text-xs mt-1">{message}</p> : null;

  return (
    <div className="container h-screen flex items-center justify-center overflow-hidden">
      <Tabs defaultValue={defaultTab} className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Welcome back! Sign in to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && <p className="text-destructive text-sm my-2">{error}</p>}
              <form onSubmit={handleSignInSubmit(onSignIn)} noValidate className="space-y-4">
                 <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    {...registerSignIn('email')}
                    required
                    autoComplete="email"
                    placeholder="m@example.com"
                  />
                  <FormError message={signInErrors.email?.message} />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    {...registerSignIn('password')}
                    required
                    autoComplete="current-password"
                  />
                  <FormError message={signInErrors.password?.message} />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
               <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isSubmitting}>
                <GoogleIcon />
                Sign In with Google
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Create an account to start your journey with Pranian.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               {error && <p className="text-destructive text-sm my-2">{error}</p>}
               <form onSubmit={handleSignUpSubmit(onSignUp)} noValidate className="space-y-4">
                 <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    {...registerSignUp('email')}
                    required
                    autoComplete="email"
                    placeholder="m@example.com"
                  />
                  <FormError message={signUpErrors.email?.message} />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    {...registerSignUp('password')}
                    required
                    autoComplete="new-password"
                  />
                  <FormError message={signUpErrors.password?.message} />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="signup-confirmPassword">Confirm Password</Label>
                  <Input
                    id="signup-confirmPassword"
                    type="password"
                    {...registerSignUp('confirmPassword')}
                    required
                    autoComplete="new-password"
                  />
                  <FormError message={signUpErrors.confirmPassword?.message} />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                   {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </Button>
              </form>
               <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isSubmitting}>
                <GoogleIcon />
                Sign Up with Google
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

    