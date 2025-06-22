import { LogoutForm } from '@/components/logout-form';
import { Button, ButtonsGroup } from '@/components/ui/button';
import { H1, P } from '@/components/ui/typography';

export default function SettingsPage() {
  return (
    <div className='flex flex-col gap-4'>
      <H1>Settings</H1>
      <LogoutForm />
    </div>
  );
}
