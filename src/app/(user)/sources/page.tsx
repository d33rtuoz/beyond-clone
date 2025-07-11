import { Input } from '@/components/ui/input';
import { H1, H2, P } from '@/components/ui/typography';
import { PAGES } from '@/constants/pages';
import { getSources } from '@/server/sources.actions';
import Form from 'next/form';

export default async function SourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sources = await getSources((await searchParams).search);

  return (
    <div className='flex flex-col gap-4'>
      <H1>Sources</H1>
      <P>Official books, rules for players and DM's. Adventures. Homebrews.</P>
      <Form action={PAGES.SOURCES}>
        <div className='flex w-full max-w-sm items-center gap-2'>
          <Input
            type='text'
            placeholder='Search...'
            name='search'
            className='flex-1'
          />
          {/* <Button
            variant='ghost'
            size='icon'
          >
            <SlidersHorizontal />
          </Button> */}
        </div>
      </Form>
      <>
        <ul className='flex flex-col gap-4'>
          {sources &&
            sources.map((item) => (
              <li
                key={item.id}
                className='p-4 bg-primary text-primary-foreground rounded-md'
              >
                <H2>{item.name}</H2>
                <P>by {item.author}</P>
              </li>
            ))}
        </ul>
      </>
    </div>
  );
}
