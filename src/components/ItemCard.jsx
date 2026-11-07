"use client";
import { useContext } from 'react';
import { MercaderContext } from '../context/MercaderContext';

export default function ItemCard({ item }) {
    const { openCalculator } = useContext(MercaderContext);
    const displayPrice = [
        item.price.platino > 0 ? `${item.price.platino} pp` : '',
        item.price.oro > 0 ? `${item.price.oro} gp` : '',
        item.price.plata > 0 ? `${item.price.plata} sp` : '',
        item.price.bronce > 0 ? `${item.price.bronce} cp` : ''
    ].filter(Boolean).join(', ') || '0 cp';

    return (
        <article className="item-card">
            <div>
                <span className="item-category">{item.subcategory}</span>
                <h2 className="item-name">{item.name}</h2>
                <p className="item-description">{item.desc}</p>
                <div className="item-metrics">
                    <div><span className="metric-label">Valor</span><span className="metric-value price">{displayPrice}</span></div>
                    <div><span className="metric-label">Carga</span><span className="metric-value">{item.weight} kg</span></div>
                </div>
            </div>
            <button className="solid-button" onClick={() => openCalculator(item)}>Calcular venta / compra</button>
        </article>
    );
}
