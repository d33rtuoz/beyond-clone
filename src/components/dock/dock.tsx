import { PAGES } from '@/constants/pages';
import { Library, NotebookText, Settings, User, Users } from 'lucide-react';
import DockItem from './dock-items';

const ITEMS = [
  // {
  //   key: 1,
  //   icon: <Library />,
  //   href: PAGES.HOME,
  // },
  // {
  //   key: 2,
  //   icon: <NotebookText />,
  //   href: PAGES.RULES,
  // },
  // {
  //   icon: <Users />,
  //   href: PAGES.,
  // },
  {
    key: 4,
    icon: <Settings />,
    href: PAGES.SETTINGS,
  },
];

export default async function Dock() {
  return (
    <nav className='bg-background grid grid-flow-col'>
      {ITEMS.map((item) => (
        <DockItem
          Icon={item.icon}
          href={item.href}
          key={item.key}
        />
      ))}
    </nav>
  );
}
