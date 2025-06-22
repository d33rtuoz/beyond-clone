'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DockItem({
  Icon,
  href,
  key,
}: {
  Icon: React.ReactElement;
  href: string;
  key: number;
}) {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    if (path === '/' && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return (
    <Link
      key={key}
      href={href}
      className={clsx(
        'grid justify-items-center gap-1 p-4',
        isActivePath(href) && 'border-t-1 border-accent-red text-accent-red'
      )}
    >
      {Icon}
    </Link>
  );
}
