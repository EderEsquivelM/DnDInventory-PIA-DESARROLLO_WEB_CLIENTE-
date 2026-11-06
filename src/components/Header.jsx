
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="p-6 border-b border-c6/50 bg-c4/80 backdrop-blur-md sticky top-0 z-30 shadow-[0_4px_20px_rgba(1,1,1,0.9)]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3 text-center md:text-left">
                    <div className="w-10 h-10 rounded-full bg-c1/20 border-2 border-c1 flex items-center justify-center text-c1 animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-widest text-c1 drop-shadow-[0_0_8px_rgba(255,106,82,0.8)]">D&D Inventory</h1>
                    </div>
                </div>
                <nav className="flex gap-2 p-1 bg-c4 rounded-lg border border-c2">
                    <Link href="/" className={`px-6 py-2 rounded font-fantasy text-sm transition-all ${pathname === '/' ? 'bg-c2/80 text-c5 shadow-arcane border border-c1' : 'text-c5/50 hover:text-c5 border border-transparent'}`}>
                        Códice de Items
                    </Link>
                    <Link href="/conversor" className={`px-6 py-2 rounded font-fantasy text-sm transition-all ${pathname === '/conversor' ? 'bg-c2/80 text-c5 shadow-arcane border border-c1' : 'text-c5/50 hover:text-c5 border border-transparent'}`}>
                        Conversor de Monedas
                    </Link>
                </nav>
            </div>
        </header>
    );
}
