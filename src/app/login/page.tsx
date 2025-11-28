
'use client';

import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock } from 'lucide-react';
import { useAuth, useFirestore } from '@/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
