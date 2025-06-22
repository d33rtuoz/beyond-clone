'use client';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ColorThemeForm() {
  const { theme, setTheme } = useTheme();
  const themes = ['light', 'dark', 'system'];

  return (
    <form className='flex flex-col gap-4'>
      {themes.map((item) => (
        <Button
          key={item}
          onClick={() => setTheme(item)}
          className='justify-between'
        >
          <span className='first-letter:uppercase'>{item}</span>
          {item == theme ? <Check /> : null}
        </Button>
      ))}
    </form>
  );
}
