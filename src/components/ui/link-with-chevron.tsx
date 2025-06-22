import { ChevronRight } from 'lucide-react';
import Link, { LinkProps } from 'next/link';

export default function LinkWithChevron({
  href,
  actionValue,
  children,
}: LinkProps &
  React.ComponentProps<'a'> & {
    actionValue?: string;
  }) {
  return (
    <Link
      href={href}
      className='w-full flex flex-row justify-between items-center px-4 py-2 bg-dark-12 rounded-md'
    >
      {children}
      <span className='flex flex-row gap-1 text-primary-foreground/50'>
        {actionValue}
        <ChevronRight />
      </span>
    </Link>
  );
}
