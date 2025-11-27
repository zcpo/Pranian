import Link from 'next/link';
import { FC } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('text-2xl font-bold font-headline tracking-tight', className)}>
      Pranian
    </div>
  );
};

export default Logo;
