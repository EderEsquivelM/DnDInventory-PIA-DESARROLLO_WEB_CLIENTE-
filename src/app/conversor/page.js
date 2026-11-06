"use client";
import { useState, useMemo } from 'react';

export default function ConversorPage() {
    const [amount, setAmount] = useState(1);
    const [fromRate, setFromRate] = useState(100);
    const [toRate, setToRate] = useState(10);
    const [toLabel, setToLabel] = useState('sp');

    const handleToChange = (e) => {
        setToRate(e.target.value);
        const rawLabel = e.target.options[e.target.selectedIndex].text;
        const toLabelMatch = rawLabel.match(/\(([^)]+)\)/);
        if(toLabelMatch) {
            setToLabel(toLabelMatch[1]);
        }
    };

    const conversionResult = useMemo(() => {
        const totalBronce = Number(amount) * Number(fromRate);
        const converted = totalBronce / Number(toRate);
        return converted % 1 === 0 ? converted : converted.toFixed(2);
    }, [amount, fromRate, toRate]);

    return (
        <main className="flex-grow flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.5s_ease-out]">
            <section className="glass-panel rounded-2xl p-8 max-w-3xl w-full border-t-4 border-t-c1 shadow-arcane">
                <div className="text-center mb-10">
                    <h2 className="text-3xl text-c1 mb-2 font-fantasy">Transmutador de Monedas</h2>
                    <p className="text-sm text-c5/60 italic">Equivalencias bajo las leyes de la Alianza Mercantil.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-10">
                    <div className="flex-1 w-full glass-panel p-4 rounded-xl border border-c2 relative">
                        <span className="absolute -top-3 left-4 bg-c4 px-2 text-xs text-c1 font-fantasy">Ofrenda</span>
                        <div className="flex gap-2">
                            <input type="number" min="0" className="arcane-input p-3 w-1/3 text-xl text-center rounded" value={amount} onChange={(e) => setAmount(e.target.value)} />
                            <select className="arcane-input p-3 w-2/3 rounded" value={fromRate} onChange={(e) => setFromRate(e.target.value)}>
                                <option value="1000">Platino (pp)</option>
                                <option value="100">Oro (gp)</option>
                                <option value="10">Plata (sp)</option>
                                <option value="1">Bronce (cp)</option>
                            </select>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center p-4 bg-c2 rounded-full border border-c6 shadow-[0_0_15px_#A00008]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-c5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    </div>

                    <div className="flex-1 w-full glass-panel p-4 rounded-xl border border-c2 relative">
                        <span className="absolute -top-3 left-4 bg-c4 px-2 text-xs text-c1 font-fantasy">Deseo</span>
                        <select className="arcane-input p-3 w-full rounded" value={toRate} onChange={handleToChange}>
                            <option value="1000">Platino (pp)</option>
                                <option value="100">Oro (gp)</option>
                                <option value="10">Plata (sp)</option>
                                <option value="1">Bronce (cp)</option>
                        </select>
                    </div>
                </div>

                <div className="bg-c4 border border-c1 rounded-xl p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-c2/40 via-transparent to-transparent"></div>
                    <span className="block text-xs font-bold text-c5/50 uppercase tracking-[0.2em] mb-2 relative z-10">Transmutado en:</span>
                    <div className="text-5xl font-fantasy text-c5 drop-shadow-[0_0_10px_rgba(244,234,222,0.5)] relative z-10">
                        <span>{conversionResult}</span> <span className="text-2xl text-c1">{toLabel}</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
