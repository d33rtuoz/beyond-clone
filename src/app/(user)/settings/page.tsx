import { LogoutForm } from '@/components/logout-form';
import { H1, H2, P } from '@/components/ui/typography';
import { Li, Ul } from '@/components/ul';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ColorThemeForm from './colorThemeForm';

export default function SettingsPage() {
  return (
    <div className='flex flex-col gap-4'>
      <H1>Settings</H1>

      <H2>Application</H2>

      <Ul variant='rounded'>
        <Li>
          <Dialog>
            <DialogTrigger defaultValue='System'>Color Theme</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Choose your color theme</DialogTitle>
              </DialogHeader>
              <ColorThemeForm />
            </DialogContent>
          </Dialog>
        </Li>
      </Ul>

      <LogoutForm />
    </div>
  );
}
