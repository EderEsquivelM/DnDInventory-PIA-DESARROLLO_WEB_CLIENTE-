"use client";
import { useContext } from 'react';
import { MercaderContext } from '../context/MercaderContext';

export default function FabButton() {
    const { toggleDrawer } = useContext(MercaderContext);
    return <button onClick={() => toggleDrawer(true)} className="fab-button" aria-label="Abrir Balanza">⚖</button>;
}
