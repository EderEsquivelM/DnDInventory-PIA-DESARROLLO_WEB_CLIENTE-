"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="site-header">
            <div className="header-inner">
                <div className="brand">
                    <div className="brand-mark" aria-hidden="true">⌘</div>
                    <h1 className="brand-title">D&amp;D Inventory</h1>
                </div>
                <nav className="site-nav" aria-label="Navegación principal">
                    <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Códice de Ítems</Link>
                    <Link href="/conversor" aria-current={pathname === '/conversor' ? 'page' : undefined}>Conversor de Monedas</Link>
                </nav>
            </div>
        </header>
    );
}
