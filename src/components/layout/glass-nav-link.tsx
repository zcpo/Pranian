
'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import './glass-nav-link.css';

type GlassNavLinkProps = {
  href: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
  onClick?: () => void;
};

export function GlassNavLink({ href, label, icon: Icon, active, onClick }: GlassNavLinkProps) {
  return (
    <Link href={href} className={cn("glass-nav-item", { 'glass-item--active': active })} onClick={onClick}>
      <div className="glass-nav-item__bg"></div>
      <div className="glass-nav-item__border"></div>
      <div className="glass-nav-item__content">
        <Icon className="h-7 w-7" />
        <span className="text-xs mt-1">{label}</span>
      </div>
    </Link>
  );
}
