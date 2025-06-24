import { Input } from '@/components/ui/input';
import { H1, P } from '@/components/ui/typography';
import { PAGES } from '@/constants/pages';
import Form from 'next/form';
import SourcesList from './sourcesList';

export default function SourcesPage() {
  return (
    <div className='flex flex-col gap-4'>
      <H1>Sources</H1>
      <P>Official books, rules for players and DM's. Adventures. Homebrews.</P>
      <Form
        action={PAGES.SOURCES}
        className='flex flex-col gap-4'
      >
        <Input
          type='text'
          name='search'
        />
        <SourcesList />
      </Form>
    </div>
  );
}
