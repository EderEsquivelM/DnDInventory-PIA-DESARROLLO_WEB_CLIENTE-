"use client";
import { useState } from 'react';

export default function FiltrosRitual({
    categoria, setCategoria, subCategoria, setSubCategoria,
    maxPrice, setMaxPrice, maxWeight, setMaxWeight,
    minAc, setMinAc, noStealthDis, setNoStealthDis,
    dmgType, setDmgType, resetFilters
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="glass-panel filter-panel">
            <button type="button" className="filter-toggle" onClick={() => setIsExpanded((expanded) => !expanded)} aria-expanded={isExpanded} aria-controls="search-filters-content">
                <h2 className="filter-title">⌘ Filtros de Búsqueda</h2>
                <span className="filter-plus" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
            </button>
            <div id="search-filters-content" className={isExpanded ? 'filter-content' : 'filter-content filters-collapsed'}>
                <div className="filter-grid">
                    <label className="filter-field"><span className="filter-label">Escuela Principal</span><select value={categoria} onChange={(e) => { setCategoria(e.target.value); setSubCategoria(''); }}><option value="">Todo el conocimiento...</option><option value="consumables">Pociones &amp; Consumibles</option><option value="armor">Armaduras &amp; Escudos</option><option value="weapons">Armamento</option><option value="travel">Monturas &amp; Viaje</option></select></label>
                    <label className="filter-field"><span className="filter-label">Disciplina</span><select disabled={!categoria} value={subCategoria} onChange={(e) => setSubCategoria(e.target.value)}><option value="">{categoria ? 'Cualquier disciplina...' : 'Requiere Escuela...'}</option>{categoria === 'consumables' && <><option value="potion">Elixires &amp; Pociones</option><option value="scroll">Pergaminos Arcanos</option></>}{categoria === 'armor' && <><option value="light">Ligera (Movilidad)</option><option value="medium">Media (Equilibrio)</option><option value="heavy">Pesada (Defensa)</option></>}{categoria === 'weapons' && <><option value="simple">Armas Simples</option><option value="martial">Armas Marciales</option></>}{categoria === 'travel' && <><option value="mounts">Bestias de Monta</option><option value="vehicles">Carruajes &amp; Barcos</option></>}</select></label>
                    <label className="filter-field"><span className="filter-label">Tributo Máx (Oro)</span><input type="number" min="0" placeholder="Ej. 50" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} /></label>
                    <label className="filter-field"><span className="filter-label">Carga Máx (kg)</span><input type="number" min="0" step="0.5" placeholder="Ej. 10" value={maxWeight} onChange={(e) => setMaxWeight(e.target.value)} /></label>
                </div>
                {(categoria === 'armor' || categoria === 'weapons') && <div className="dynamic-filters">
                    {categoria === 'armor' && <><label className="filter-field"><span className="filter-label">Defensa (AC) Mínima</span><input type="number" placeholder="Ej. 14" value={minAc} onChange={(e) => setMinAc(e.target.value)} /></label><label className="check-field"><input type="checkbox" checked={noStealthDis} onChange={(e) => setNoStealthDis(e.target.checked)} /> Favorece Sigilo (Sin penalización)</label></>}
                    {categoria === 'weapons' && <label className="filter-field"><span className="filter-label">Tipo de Estrago</span><select value={dmgType} onChange={(e) => setDmgType(e.target.value)}><option value="">Cualquier tipo...</option><option value="slashing">Cortante</option><option value="piercing">Perforante</option><option value="bludgeoning">Contundente</option></select></label>}
                </div>}
                <div className="filter-actions"><button className="solid-button secondary" onClick={resetFilters}>Disipar Filtros</button></div>
            </div>
        </section>
    );
}
