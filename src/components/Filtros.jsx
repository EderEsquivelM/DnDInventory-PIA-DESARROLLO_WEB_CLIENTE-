
"use client";
export default function FiltrosRitual({ 
    categoria, setCategoria, 
    subCategoria, setSubCategoria, 
    maxPrice, setMaxPrice, 
    maxWeight, setMaxWeight,
    minAc, setMinAc,
    noStealthDis, setNoStealthDis,
    dmgType, setDmgType,
    resetFilters
}) {
    return (
        <section className="glass-panel rounded-xl p-6 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-c1 to-transparent opacity-50"></div>
            
            <h2 className="text-xl text-c1 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                Filtros de Búsqueda
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase text-c5/70 tracking-widest">Escuela Principal:</label>
                    <select className="arcane-input rounded p-2.5 w-full text-sm" value={categoria} onChange={(e) => { setCategoria(e.target.value); setSubCategoria(''); }}>
                        <option value="">Todo el conocimiento...</option>
                        <option value="consumables">Pociones & Consumibles</option>
                        <option value="armor">Armaduras & Escudos</option>
                        <option value="weapons">Armamento</option>
                        <option value="travel">Monturas & Viaje</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase text-c5/70 tracking-widest">Disciplina:</label>
                    <select className="arcane-input rounded p-2.5 w-full text-sm disabled:opacity-50" disabled={!categoria} value={subCategoria} onChange={(e) => setSubCategoria(e.target.value)}>
                        {!categoria && <option value="">Requiere Escuela...</option>}
                        {categoria && <option value="">Cualquier disciplina...</option>}
                        {categoria === 'consumables' && (
                            <>
                                <option value="potion">Elixires & Pociones</option>
                                <option value="scroll">Pergaminos Arcanos</option>
                            </>
                        )}
                        {categoria === 'armor' && (
                            <>
                                <option value="light">Ligera (Movilidad)</option>
                                <option value="medium">Media (Equilibrio)</option>
                                <option value="heavy">Pesada (Defensa)</option>
                            </>
                        )}
                        {categoria === 'weapons' && (
                            <>
                                <option value="simple">Armas Simples</option>
                                <option value="martial">Armas Marciales</option>
                            </>
                        )}
                        {categoria === 'travel' && (
                            <>
                                <option value="mounts">Bestias de Monta</option>
                                <option value="vehicles">Carruajes & Barcos</option>
                            </>
                        )}
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase text-c5/70 tracking-widest">Tributo Máx (Oro):</label>
                    <input type="number" min="0" placeholder="Ej. 50" className="arcane-input rounded p-2.5 w-full text-sm" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase text-c5/70 tracking-widest">Carga Máx (kg):</label>
                    <input type="number" min="0" step="0.5" placeholder="Ej. 10" className="arcane-input rounded p-2.5 w-full text-sm" value={maxWeight} onChange={(e) => setMaxWeight(e.target.value)} />
                </div>
            </div>

            {/* Filtros Dinámicos */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 p-4 rounded bg-c4/50 border border-c2 ${categoria === 'armor' || categoria === 'weapons' ? '' : 'hidden'}`}>
                {categoria === 'armor' && (
                    <>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase text-c5/70 tracking-widest">Defensa (AC) Mínima:</label>
                            <input type="number" className="arcane-input rounded p-2.5 w-full text-sm" placeholder="Ej. 14" value={minAc} onChange={(e) => setMinAc(e.target.value)} />
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <input type="checkbox" id="no-stealth-dis" className="w-5 h-5 cursor-pointer accent-c1 bg-c4 border-c2 rounded" checked={noStealthDis} onChange={(e) => setNoStealthDis(e.target.checked)} />
                            <label htmlFor="no-stealth-dis" className="text-sm cursor-pointer text-c5/80">Favorece Sigilo (Sin penalización)</label>
                        </div>
                    </>
                )}
                {categoria === 'weapons' && (
                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase text-c5/70 tracking-widest">Tipo de Estrago:</label>
                        <select className="arcane-input rounded p-2.5 w-full text-sm" value={dmgType} onChange={(e) => setDmgType(e.target.value)}>
                            <option value="">Cualquier tipo...</option>
                            <option value="slashing">Cortante</option>
                            <option value="piercing">Perforante</option>
                            <option value="bludgeoning">Contundente</option>
                        </select>
                    </div>
                )}
            </div>
            
            <div className="mt-8 flex justify-end gap-4 border-t border-c6/30 pt-6">
                <button className="arcane-button secondary px-6 py-2 rounded text-sm" onClick={resetFilters}>Disipar Filtros</button>
            </div>
        </section>
    );
}
