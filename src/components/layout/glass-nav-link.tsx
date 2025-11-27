
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
    <Link href={href} className={cn("glass-nav-link", { 'glass-item--active': active })} onClick={onClick}>
        <div className="glass-nav-link__filter"></div>
        <div className="glass-nav-link__overlay"></div>
        <div className="glass-nav-link__specular"></div>
        <div className="glass-nav-link__content">
            <Icon />
            <span>{label}</span>
        </div>
    </Link>
  );
}
