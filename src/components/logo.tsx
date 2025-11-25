import Link from 'next/link';
import { FC } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={cn('text-2xl font-bold font-headline text-foreground tracking-tight', className)}>
      Pranian
    </Link>
  );
};

export default Logo;
