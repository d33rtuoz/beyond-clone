import { PAGES } from '@/constants/pages';
import { createAuthClient } from 'better-auth/react';
import { redirect } from 'next/navigation';

export const authClient = createAuthClient();

export const signInWithGoogle = async () => {
  await authClient.signIn.social({
    provider: 'google',
    callbackURL: PAGES.SETTINGS,
  });
};

export const signOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect(PAGES.LOGIN);
      },
    },
  });
};
