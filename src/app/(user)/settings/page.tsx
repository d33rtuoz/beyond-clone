import { LogoutForm } from '@/components/logout-form';
import { Button } from '@/components/ui/button';
import LinkWithChevron from '@/components/ui/link-with-chevron';
import { H1, H2, P } from '@/components/ui/typography';
import { Li, Ul } from '@/components/ul';
import { PAGES } from '@/constants/pages';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ColorThemeForm from './colorThemeForm';

export default function SettingsPage() {
  return (
    <div className='flex flex-col gap-4'>
      <H1>Settings</H1>

      <LinkWithChevron href=''>Account Settings</LinkWithChevron>

      <H2>Application</H2>

      <Ul variant='rounded'>
        <Li>
          <LinkWithChevron
            href=''
            actionValue='English'
          >
            Language
          </LinkWithChevron>
        </Li>

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

        <Li>
          <LinkWithChevron
            href=''
            actionValue='Modern'
          >
            Appearence
          </LinkWithChevron>
        </Li>
      </Ul>

      <LogoutForm />
    </div>
  );
}
