
"use client";
import { useContext, useState, useEffect } from 'react';
import { MercaderContext } from '../context/MercaderContext';

export default function BalanzaDrawer() {
    const { isOpen, toggleDrawer, selectedItem } = useContext(MercaderContext);

    const [payPp, setPayPp] = useState(0);
    const [payGp, setPayGp] = useState(0);
    const [paySp, setPaySp] = useState(0);
    const [payCp, setPayCp] = useState(0);

    const [changeResult, setChangeResult] = useState({ text: 'Selecciona un item', className: '' });

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
            setChangeResult({ text: `Faltan monedas (Deuda: ${Math.abs(diffCp)} cp)`, className: '' });
        } else if (diffCp === 0) {
            setChangeResult({ text: "Trato Justo (Sin vuelto)", className: '' });
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

            setChangeResult({ text: changeArr.join(' / '), className: '' });
        }
    };

    return (
        <>
            {/* OVERLAY DEL DRAWER */}
            <div 
                className={`drawer-overlay ${isOpen ? '' : 'hidden'}`} 
                onClick={() => toggleDrawer(false)}
            ></div>

            {/* DRAWER: Calculadora / Balanza del Mercader */}
            <aside className={`commercial-drawer ${isOpen ? 'open' : ''}`}>
                
                <div className="drawer-header">
                    <h2 className="drawer-title">
                        <svg xmlns="http://www.w3.org/2000/svg" className="calculator-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        Calculadora Comercial
                    </h2>
                    <button onClick={() => toggleDrawer(false)} className="close-button" aria-label="Cerrar">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className="drawer-content">
                    {/* Info del Item (Estilo Ticket) */}
                    <div className="purchase-ticket">
                        <h3>Manifiesto de Compra</h3>
                        <strong>{selectedItem ? selectedItem.name : 'Sin reliquia seleccionada'}</strong>
                        
                        <div className="ticket-row">
                            <span>Tasa Base:</span>
                            <b>
                                {selectedItem ? 
                                    [
                                        selectedItem.price.platino > 0 ? `${selectedItem.price.platino} pp` : '',
                                        selectedItem.price.oro > 0 ? `${selectedItem.price.oro} gp` : '',
                                        selectedItem.price.plata > 0 ? `${selectedItem.price.plata} sp` : '',
                                        selectedItem.price.bronce > 0 ? `${selectedItem.price.bronce} cp` : ''
                                    ].filter(Boolean).join(', ') || '0 cp'
                                : '0 cp'}
                            </b>
                        </div>
                        <div className="ticket-row">
                            <span>Carga Física:</span>
                            <b>{selectedItem ? `${selectedItem.weight} kg` : '0 kg'}</b>
                        </div>
                    </div>

                    {/* Panel Dividido (Inputs) */}
                    <div className="payment-panel">
                        <div className="payment-column">
                            {/* Columna Izquierda: Precio Fijo */}
                            <div>
                                <h3>Deuda</h3>
                                <div>
                                    <div className="coin-row">
                                        <label>PP</label>
                                        <input type="number" className="payment-input" readOnly value={selectedItem?.price?.platino || 0} />
                                    </div>
                                    <div className="coin-row">
                                        <label>GP</label>
                                        <input type="number" className="payment-input" readOnly value={selectedItem?.price?.oro || 0} />
                                    </div>
                                    <div className="coin-row">
                                        <label>SP</label>
                                        <input type="number" className="payment-input" readOnly value={selectedItem?.price?.plata || 0} />
                                    </div>
                                    <div className="coin-row">
                                        <label>CP</label>
                                        <input type="number" className="payment-input" readOnly value={selectedItem?.price?.bronce || 0} />
                                    </div>
                                </div>
                            </div>

                            {/* Columna Derecha: Pago del Usuario */}
                            <div className="payment-column">
                                <h3>Tu Bolsa</h3>
                                <div>
                                    <div className="coin-row">
                                        <input type="number" className="payment-input" min="0" value={payPp} onChange={(e) => setPayPp(e.target.value)} />
                                    </div>
                                    <div className="coin-row">
                                        <input type="number" className="payment-input" min="0" value={payGp} onChange={(e) => setPayGp(e.target.value)} />
                                    </div>
                                    <div className="coin-row">
                                        <input type="number" className="payment-input" min="0" value={paySp} onChange={(e) => setPaySp(e.target.value)} />
                                    </div>
                                    <div className="coin-row">
                                        <input type="number" className="payment-input" min="0" value={payCp} onChange={(e) => setPayCp(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Resultado del Cálculo */}
                        <div className={`result-box ${changeResult.text.startsWith('Faltan monedas') ? 'danger' : ''}`}>
                            <span className="result-label">Resultado</span>
                            <div className="result-text">{changeResult.text}</div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
