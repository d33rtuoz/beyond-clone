'use client';

import { signOut } from '@/lib/auth.client';
import { Button } from './ui/button';

export function LogoutForm() {
  return (
    <form action={signOut}>
      <Button type='submit'>Logout</Button>
    </form>
  );
}
