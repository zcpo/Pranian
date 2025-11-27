'use client';

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock } from 'lucide-react';
import { useAuth } from '@/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

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

export default function LoginClientPage() {
  const [isSigningUp, setIsSigningUp] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

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
      // User is new, create a document for them
      await setDoc(userDocRef, {
        id: user.uid,
        email: user.email,
        displayName: user.displayName,
        avatarUrl: user.photoURL,
      });
    }
    toast({
      title: 'Success!',
      description: 'You have been successfully signed in.',
    });
    router.push('/profile');
  };

  const onSignUp: SubmitHandler<SignUpFormValues> = async (data) => {
    if (!auth) return;
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await handleUserCreation(userCredential.user);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onSignIn: SubmitHandler<SignInFormValues> = async (data) => {
    if (!auth) return;
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      await handleUserCreation(userCredential.user);
    } catch (err: any) {
      setError(err.message);
    }
  };
  
  const handleGoogleSignIn = async () => {
    if (!auth) return;
    setError(null);
    try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        await handleUserCreation(userCredential.user);
    } catch (err: any) {
        setError(err.message);
    }
  };

  const FormError = ({ message }: { message?: string }) =>
    message ? <p className="text-destructive text-xs mt-1">{message}</p> : null;

  return (
    <main>
      <div className="container">
        <div
          className={cn('form signup', {
            fadein: isSigningUp,
            fadeout: !isSigningUp,
            hidden: !isSigningUp,
          })}
        >
          <form onSubmit={handleSignUpSubmit(onSignUp)} noValidate>
            <h2>Sign Up</h2>
            {error && isSigningUp && (
              <p className="text-destructive text-sm my-2">{error}</p>
            )}
            <div className="inputBox">
              <input
                type="email"
                {...registerSignUp('email')}
                required
                autoComplete="email"
              />
              <Mail />
              <span>email</span>
              <FormError message={signUpErrors.email?.message} />
            </div>
            <div className="inputBox">
              <input
                type="password"
                {...registerSignUp('password')}
                required
                autoComplete="new-password"
              />
              <Lock />
              <span>create password</span>
              <FormError message={signUpErrors.password?.message} />
            </div>
            <div className="inputBox">
              <input
                type="password"
                {...registerSignUp('confirmPassword')}
                required
                autoComplete="new-password"
              />
              <Lock />
              <span>confirm password</span>
              <FormError message={signUpErrors.confirmPassword?.message} />
            </div>
            <div className="inputBox">
              <input type="submit" value="Create Account" />
            </div>
            
            <div className="flex items-center w-full my-2">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="flex-shrink mx-4 text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>

            <Button variant="outline" className="w-full bg-transparent text-white hover:bg-white/10 border-white/20" onClick={handleGoogleSignIn} type="button">
                <GoogleIcon />
                Sign Up with Google
            </Button>

            <p className="p-text">
              Already a member?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsSigningUp(false);
                  setError(null);
                }}
                className="login-toggle"
              >
                Sign In
              </button>
            </p>
          </form>
        </div>

        <div
          className={cn('form signin', {
            fadein: !isSigningUp,
            fadeout: isSigningUp,
            hidden: isSigningUp,
          })}
        >
          <form onSubmit={handleSignInSubmit(onSignIn)} noValidate>
            <h2>Sign In</h2>
            {error && !isSigningUp && (
              <p className="text-destructive text-sm my-2">{error}</p>
            )}
            <div className="inputBox">
              <input
                type="email"
                {...registerSignIn('email')}
                required
                autoComplete="email"
              />
              <Mail />
              <span>email</span>
              <FormError message={signInErrors.email?.message} />
            </div>
            <div className="inputBox">
              <input
                type="password"
                {...registerSignIn('password')}
                required
                autoComplete="current-password"
              />
              <Lock />
              <span>password</span>
              <FormError message={signInErrors.password?.message} />
            </div>
            <div className="inputBox">
              <input type="submit" value="Login" />
            </div>

            <div className="flex items-center w-full my-2">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="flex-shrink mx-4 text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>

            <Button variant="outline" className="w-full bg-transparent text-white hover:bg-white/10 border-white/20" onClick={handleGoogleSignIn} type="button">
                <GoogleIcon />
                Sign In with Google
            </Button>
            
            <p className="p-text">
              Not yet a member?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsSigningUp(true);
                  setError(null);
                }}
                className="login-toggle"
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
