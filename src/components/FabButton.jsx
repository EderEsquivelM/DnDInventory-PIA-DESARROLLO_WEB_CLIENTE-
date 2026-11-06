
"use client";
import { useContext } from 'react';
import { MercaderContext } from '../context/MercaderContext';

export default function FabButton() {
    const { toggleDrawer } = useContext(MercaderContext);

    return (
        <button onClick={() => toggleDrawer(true)} className="fixed bottom-8 right-8 w-16 h-16 rounded-full border border-c1 bg-c2 hover:bg-c6 transition-all shadow-[0_0_20px_#FF6A52] flex items-center justify-center z-40 group" aria-label="Abrir Balanza">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-c5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6h18M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6m-9 4v4m4-4v4m-8-4v4" />
            </svg>
        </button>
    );
}
