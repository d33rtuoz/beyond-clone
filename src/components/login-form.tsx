'use client';

import { signInWithGoogle } from '@/lib/auth.client';
import { Button } from './ui/button';

export default function LoginForm() {
  return (
    <form action={signInWithGoogle}>
      <Button
        type='submit'
        className='bg-accent-red text-white'
      >
        Sign in with Google
      </Button>
    </form>
  );
}
