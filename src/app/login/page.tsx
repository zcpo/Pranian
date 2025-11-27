import './login.css';
import LoginClientPage from './login-client';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <Suspense>
      <LoginClientPage />
    </Suspense>
  );
}
