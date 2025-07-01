import { H2, P } from '@/components/ui/typography';
import { getSources } from '@/server/sources.actions';

// export default async function SourcesList({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) {
export default async function SourcesList() {
  // const sources = await getSources((await searchParams).search);
  // const sources = await getSources();

  return (
    <>
      <ul className='flex flex-col gap-4'>
        {/* {sources &&
          sources.map((item) => (
            <li
              key={item.id}
              className='p-4 bg-primary text-primary-foreground rounded-md'
            >
              <H2>{item.name}</H2>
              <P>by {item.author}</P>
            </li>
          ))} */}
      </ul>
    </>
  );
}
