
"use client";
import { useContext } from 'react';
import { MercaderContext } from '../context/MercaderContext';

export default function ItemCard({ item }) {
    const { openCalculator } = useContext(MercaderContext);

    let priceStr = [];
    if(item.price.platino > 0) priceStr.push(`${item.price.platino} pp`);
    if(item.price.oro > 0) priceStr.push(`${item.price.oro} gp`);
    if(item.price.plata > 0) priceStr.push(`${item.price.plata} sp`);
    if(item.price.bronce > 0) priceStr.push(`${item.price.bronce} cp`);
    const displayPrice = priceStr.join(', ') || '0 cp';

    return (
        <div className="glass-panel p-5 rounded-lg flex flex-col h-full group hover:border-c1 transition-all duration-300 relative overflow-hidden">
            {/* Decoración Esquina */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-c2 rotate-45 border-b border-c6 opacity-50 group-hover:bg-c6 transition-colors"></div>
            
            <div className="flex-grow z-10">
                <span className="text-[10px] text-c1 uppercase tracking-widest mb-1 block">{item.subcategory}</span>
                <h3 className="font-fantasy text-lg leading-tight text-c5 mb-3">{item.name}</h3>
                <p className="text-sm text-c5/70 mb-5 leading-relaxed italic border-l-2 border-c2 pl-3">{item.desc}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm bg-c4/50 p-3 rounded border border-c4/80 mb-5">
                    <div>
                        <span className="block text-c5/40 text-[10px] uppercase tracking-wider mb-1">Valor</span>
                        <span className="font-bold text-yellow-500">{displayPrice}</span>
                    </div>
                    <div>
                        <span className="block text-c5/40 text-[10px] uppercase tracking-wider mb-1">Carga</span>
                        <span className="text-c5">{item.weight} kg</span>
                    </div>
                </div>
            </div>
            
            <button className="arcane-button w-full py-2.5 rounded text-sm z-10" onClick={() => openCalculator(item)}>
                Calcular venta / compra
            </button>
        </div>
    );
}
