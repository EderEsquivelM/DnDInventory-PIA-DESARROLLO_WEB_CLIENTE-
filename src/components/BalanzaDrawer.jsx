
"use client";
import { useContext, useState, useEffect } from 'react';
import { MercaderContext } from '../context/MercaderContext';

export default function BalanzaDrawer() {
    const { isOpen, toggleDrawer, selectedItem } = useContext(MercaderContext);

    const [payPp, setPayPp] = useState(0);
    const [payGp, setPayGp] = useState(0);
    const [paySp, setPaySp] = useState(0);
    const [payCp, setPayCp] = useState(0);

    const [changeResult, setChangeResult] = useState({ text: 'Selecciona un item', className: 'text-xl mt-2 font-fantasy text-c6 drop-shadow-[0_0_5px_rgba(160,0,8,0.8)]' });

    useEffect(() => {
        if (selectedItem) {
            calculateChange();
        }
    }, [payPp, payGp, paySp, payCp, selectedItem]);
    
    useEffect(() => {
        setPayPp(0);
        setPayGp(0);
        setPaySp(0);
        setPayCp(0);
    }, [selectedItem]);

    const calculateChange = () => {
        if (!selectedItem) return;

        const costPp = selectedItem.price.platino || 0;
        const costGp = selectedItem.price.oro || 0;
        const costSp = selectedItem.price.plata || 0;
        const costCp = selectedItem.price.bronce || 0;

        const totalCostCp = (costPp * 1000) + (costGp * 100) + (costSp * 10) + costCp;
        const totalPayCp = (Number(payPp) * 1000) + (Number(payGp) * 100) + (Number(paySp) * 10) + Number(payCp);

        const diffCp = totalPayCp - totalCostCp;

        if (diffCp < 0) {
            setChangeResult({ text: `Faltan monedas (Deuda: ${Math.abs(diffCp)} cp)`, className: "text-xl mt-2 font-fantasy text-c6 drop-shadow-[0_0_5px_rgba(160,0,8,0.8)]" });
        } else if (diffCp === 0) {
            setChangeResult({ text: "Trato Justo (Sin vuelto)", className: "text-xl mt-2 font-fantasy text-[#86efac] drop-shadow-[0_0_5px_rgba(134,239,172,0.5)]" });
        } else {
            let remaining = diffCp;
            const changePp = Math.floor(remaining / 1000);
            remaining %= 1000;
            const changeGp = Math.floor(remaining / 100);
            remaining %= 100;
            const changeSp = Math.floor(remaining / 10);
            const changeCp = remaining % 10;

            let changeArr = [];
            if (changePp > 0) changeArr.push(`${changePp} pp`);
            if (changeGp > 0) changeArr.push(`${changeGp} gp`);
            if (changeSp > 0) changeArr.push(`${changeSp} sp`);
            if (changeCp > 0) changeArr.push(`${changeCp} cp`);

            setChangeResult({ text: changeArr.join(' / '), className: "text-xl mt-2 font-fantasy text-c5 drop-shadow-[0_0_8px_rgba(244,234,222,0.5)]" });
        }
    };

    return (
        <>
            {/* OVERLAY DEL DRAWER */}
            <div 
                className={`fixed inset-0 bg-c4/90 z-40 transition-opacity backdrop-blur-sm ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                onClick={() => toggleDrawer(false)}
            ></div>

            {/* DRAWER: Calculadora / Balanza del Mercader */}
            <aside className={`fixed top-0 right-0 w-full md:w-[480px] h-full bg-c4 border-l border-c1 flex flex-col transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto shadow-[-10px_0_30px_rgba(1,1,1,0.9)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                <div className="p-6 border-b border-c2 bg-c3/50 flex justify-between items-center sticky top-0 z-10 backdrop-blur-md">
                    <h2 className="text-2xl text-c1 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        Calculadora Comercial
                    </h2>
                    <button onClick={() => toggleDrawer(false)} className="text-c5/50 hover:text-c1 transition-colors" aria-label="Cerrar">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-8">
                    {/* Info del Item (Estilo Ticket) */}
                    <div className="relative bg-c5 text-c4 p-6 rounded-sm shadow-md border-t-8 border-c2">
                        {/* Efecto borde dentado del ticket */}
                        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMjBMTEwgMTBMMjAgMjBMMjAgMEwwIDBaIiBmaWxsPSIjMDEwMTAxIi8+PC9zdmc+')] bg-repeat-x"></div>
                        
                        <h3 className="font-bold text-xs uppercase tracking-widest text-c6 mb-2 border-b border-c4/20 pb-2">Manifiesto de Compra</h3>
                        <div className="font-fantasy font-bold text-2xl mb-4 text-c4">{selectedItem ? selectedItem.name : 'Sin reliquia seleccionada'}</div>
                        
                        <div className="flex justify-between items-end border-b border-dashed border-c4/40 pb-2">
                            <span className="text-xs uppercase font-bold text-c4/60">Tasa Base:</span>
                            <span className="font-bold text-lg text-c6">
                                {selectedItem ? 
                                    [
                                        selectedItem.price.platino > 0 ? `${selectedItem.price.platino} pp` : '',
                                        selectedItem.price.oro > 0 ? `${selectedItem.price.oro} gp` : '',
                                        selectedItem.price.plata > 0 ? `${selectedItem.price.plata} sp` : '',
                                        selectedItem.price.bronce > 0 ? `${selectedItem.price.bronce} cp` : ''
                                    ].filter(Boolean).join(', ') || '0 cp'
                                : '0 cp'}
                            </span>
                        </div>
                        <div className="flex justify-between items-end mt-2">
                            <span className="text-xs uppercase font-bold text-c4/60">Carga Física:</span>
                            <span className="font-bold text-sm text-c4">{selectedItem ? `${selectedItem.weight} kg` : '0 kg'}</span>
                        </div>
                    </div>

                    {/* Panel Dividido (Inputs) */}
                    <div className="glass-panel p-6 rounded-xl border border-c2">
                        <div className="grid grid-cols-2 gap-6 relative">
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-c6/30 -translate-x-1/2"></div>

                            {/* Columna Izquierda: Precio Fijo */}
                            <div>
                                <h3 className="text-center text-xs uppercase tracking-widest text-c5/50 mb-6">Deuda</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center bg-c4 p-2 rounded border border-c2">
                                        <label className="text-xs text-gray-400">PP</label>
                                        <input type="number" className="bg-transparent w-12 text-right text-c5 focus:outline-none" readOnly value={selectedItem?.price?.platino || 0} />
                                    </div>
                                    <div className="flex justify-between items-center bg-c4 p-2 rounded border border-c2">
                                        <label className="text-xs text-yellow-500">GP</label>
                                        <input type="number" className="bg-transparent w-12 text-right text-yellow-500 focus:outline-none" readOnly value={selectedItem?.price?.oro || 0} />
                                    </div>
                                    <div className="flex justify-between items-center bg-c4 p-2 rounded border border-c2">
                                        <label className="text-xs text-gray-300">SP</label>
                                        <input type="number" className="bg-transparent w-12 text-right text-gray-300 focus:outline-none" readOnly value={selectedItem?.price?.plata || 0} />
                                    </div>
                                    <div className="flex justify-between items-center bg-c4 p-2 rounded border border-c2">
                                        <label className="text-xs text-orange-700">CP</label>
                                        <input type="number" className="bg-transparent w-12 text-right text-orange-700 focus:outline-none" readOnly value={selectedItem?.price?.bronce || 0} />
                                    </div>
                                </div>
                            </div>

                            {/* Columna Derecha: Pago del Usuario */}
                            <div>
                                <h3 className="text-center text-xs uppercase tracking-widest text-c1 mb-6">Tu Bolsa</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center bg-c2 p-2 rounded border border-c6 focus-within:border-c1 transition-colors">
                                        <input type="number" className="bg-transparent w-full text-right text-c5 focus:outline-none" min="0" value={payPp} onChange={(e) => setPayPp(e.target.value)} />
                                    </div>
                                    <div className="flex justify-between items-center bg-c2 p-2 rounded border border-c6 focus-within:border-yellow-500 transition-colors">
                                        <input type="number" className="bg-transparent w-full text-right text-yellow-500 focus:outline-none" min="0" value={payGp} onChange={(e) => setPayGp(e.target.value)} />
                                    </div>
                                    <div className="flex justify-between items-center bg-c2 p-2 rounded border border-c6 focus-within:border-gray-300 transition-colors">
                                        <input type="number" className="bg-transparent w-full text-right text-gray-300 focus:outline-none" min="0" value={paySp} onChange={(e) => setPaySp(e.target.value)} />
                                    </div>
                                    <div className="flex justify-between items-center bg-c2 p-2 rounded border border-c6 focus-within:border-orange-700 transition-colors">
                                        <input type="number" className="bg-transparent w-full text-right text-orange-700 focus:outline-none" min="0" value={payCp} onChange={(e) => setPayCp(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resultado del Cálculo */}
                    <div className="bg-c4 border-2 border-c2 rounded-xl p-6 text-center relative mt-auto">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-c4 px-4 text-xs tracking-widest text-c5/50 border border-c2 rounded-full">RESULTADO</div>
                        <div className={changeResult.className}>{changeResult.text}</div>
                    </div>
                </div>
            </aside>
        </>
    );
}
