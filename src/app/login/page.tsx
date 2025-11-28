
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, LogIn } from 'lucide-react';
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
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import './glass-form.css';

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
      const displayName = user.displayName || user.email?.split('@')[0] || 'Pranian User';
      const nameParts = displayName.split(' ');
      
      const data = {
        id: user.uid,
        email: user.email,
        firstName: nameParts[0] || 'New',
        lastName: nameParts.slice(1).join(' ') || 'User',
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
    const provider = new GoogleAuthProvider();
    setIsSubmitting(true);
    try {
      const result = await signInWithPopup(auth, provider);
      await handleUserCreation(result.user);
      toast({ title: 'Success!', description: 'You are now signed in.' });
      router.push('/profile');
    } catch (err: any) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setError(err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  const FormError = ({ message }: { message?: string }) =>
    message ? <p className="text-destructive text-xs mt-1">{message}</p> : null;

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden relative">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <Card className="w-full max-w-md glass-card z-10">
        <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><LogIn />Sign In</CardTitle>
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
                        className="glass-input"
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
                        className="glass-input"
                      />
                      <FormError message={signInErrors.password?.message} />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </form>
                  <Separator className="my-4" />
                   <Button variant="outline" className="w-full glass-button" onClick={handleGoogleSignIn} disabled={isSubmitting}>
                      Sign in with Google
                  </Button>
                </CardContent>
            </TabsContent>
            <TabsContent value="signup">
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
                        className="glass-input"
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
                        className="glass-input"
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
                        className="glass-input"
                      />
                      <FormError message={signUpErrors.confirmPassword?.message} />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                       {isSubmitting ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </form>
                   <Separator className="my-4" />
                   <Button variant="outline" className="w-full glass-button" onClick={handleGoogleSignIn} disabled={isSubmitting}>
                      Sign up with Google
                  </Button>
                </CardContent>
            </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

    