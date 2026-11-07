"use client";
import { useState, useMemo } from 'react';

export default function ConversorPage() {
    const [amount, setAmount] = useState(1);
    const [fromRate, setFromRate] = useState(100);
    const [toRate, setToRate] = useState(10);
    const [toLabel, setToLabel] = useState('sp');

    const handleToChange = (e) => {
        setToRate(e.target.value);
        const toLabelMatch = e.target.options[e.target.selectedIndex].text.match(/\(([^)]+)\)/);
        if (toLabelMatch) setToLabel(toLabelMatch[1]);
    };

    const conversionResult = useMemo(() => {
        const converted = (Number(amount) * Number(fromRate)) / Number(toRate);
        return converted % 1 === 0 ? converted : converted.toFixed(2);
    }, [amount, fromRate, toRate]);

    return (
        <main className="converter-page">
            <section className="converter-panel">
                <div className="converter-heading">
                    <h2>Transmutador de Monedas</h2>
                    <p>Equivalencias bajo las leyes de la Alianza Mercantil.</p>
                </div>
                <div className="conversion-fields">
                    <div className="conversion-box">
                        <span className="conversion-caption">Ofrenda</span>
                        <div className="conversion-row">
                            <input className="conversion-input" type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} />
                            <select className="conversion-select" value={fromRate} onChange={(e) => setFromRate(e.target.value)}>
                                <option value="1000">Platino (pp)</option><option value="100">Oro (gp)</option><option value="10">Plata (sp)</option><option value="1">Bronce (cp)</option>
                            </select>
                        </div>
                    </div>
                    <span className="swap-mark" aria-hidden="true">⇄</span>
                    <div className="conversion-box desire-box">
                        <span className="conversion-caption">Deseo</span>
                        <select className="conversion-select" value={toRate} onChange={handleToChange}>
                            <option value="1000">Platino (pp)</option><option value="100">Oro (gp)</option><option value="10">Plata (sp)</option><option value="1">Bronce (cp)</option>
                        </select>
                    </div>
                </div>
                <div className="conversion-result">
                    <small>Transmutado en</small>
                    <strong>{conversionResult} <em>{toLabel}</em></strong>
                </div>
            </section>
        </main>
    );
}
