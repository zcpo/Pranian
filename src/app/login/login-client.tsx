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
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

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

export default function LoginClientPage() {
  const [isSigningUp, setIsSigningUp] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
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

  const onSignUp: SubmitHandler<SignUpFormValues> = async (data) => {
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast({
        title: 'Account Created',
        description: 'You have been successfully signed up.',
      });
      router.push('/profile');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onSignIn: SubmitHandler<SignInFormValues> = async (data) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast({
        title: 'Signed In',
        description: 'You have been successfully signed in.',
      });
      router.push('/profile');
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
            {error && !isSigningUp && (
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
            <p className="p-text">
              Already a member?{' '}
              <button
                type="button"
                onClick={() => setIsSigningUp(false)}
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
            <p className="p-text">
              Not yet a member?{' '}
              <button
                type="button"
                onClick={() => setIsSigningUp(true)}
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
