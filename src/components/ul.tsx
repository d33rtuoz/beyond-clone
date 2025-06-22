import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

export const ulVariants = cva('flex flex-col', {
  variants: {
    variant: {
      default: '',
      rounded:
        'gap-[1px] *:bg-primary *:first:rounded-t-md *:last:rounded-b-md text-primary-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export function Ul({
  children,
  variant,
  className,
  ...props
}: React.ComponentProps<'ul'> & VariantProps<typeof ulVariants>) {
  return (
    <ul
      className={cn(ulVariants({ variant, className }))}
      {...props}
    >
      {children}
    </ul>
  );
}

export function Li({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      className={className}
      {...props}
    >
      {children}
    </li>
  );
}
