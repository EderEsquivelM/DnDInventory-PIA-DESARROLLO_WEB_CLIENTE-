
"use client";
import { useState, useMemo } from 'react';
import { mockItems } from '../data/mockItems';
import FiltrosRitual from '../components/Filtros';
import ItemCard from '../components/ItemCard';

export default function Home() {
    const [categoria, setCategoria] = useState('');
    const [subCategoria, setSubCategoria] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [maxWeight, setMaxWeight] = useState('');
    const [minAc, setMinAc] = useState('');
    const [noStealthDis, setNoStealthDis] = useState(false);
    const [dmgType, setDmgType] = useState('');

    const resetFilters = () => {
        setCategoria('');
        setSubCategoria('');
        setMaxPrice('');
        setMaxWeight('');
        setMinAc('');
        setNoStealthDis(false);
        setDmgType('');
    };

    const filteredItems = useMemo(() => {
        return mockItems.filter(item => {
            if (categoria && item.category !== categoria) return false;
            if (subCategoria && item.subcategory !== subCategoria) return false;
            if (maxWeight && item.weight > parseFloat(maxWeight)) return false;
            
            if (maxPrice) {
                const itemGoldValue = (item.price.platino * 10) + item.price.oro + (item.price.plata / 10) + (item.price.bronce / 100);
                if (itemGoldValue > parseFloat(maxPrice)) return false;
            }
            
            if (categoria === 'armor') {
                if (minAc && item.armor_class < parseInt(minAc)) return false;
                if (noStealthDis && item.stealth_disadvantage === true) return false;
            }
            if (categoria === 'weapons') {
                if (dmgType && item.damage_type !== dmgType) return false;
            }
            
            return true;
        });
    }, [categoria, subCategoria, maxPrice, maxWeight, minAc, noStealthDis, dmgType]);

    return (
        <main className="flex-grow p-4 md:p-8 relative max-w-7xl mx-auto w-full animate-[fadeIn_0.5s_ease-out]">
            <FiltrosRitual 
                categoria={categoria} setCategoria={setCategoria}
                subCategoria={subCategoria} setSubCategoria={setSubCategoria}
                maxPrice={maxPrice} setMaxPrice={setMaxPrice}
                maxWeight={maxWeight} setMaxWeight={setMaxWeight}
                minAc={minAc} setMinAc={setMinAc}
                noStealthDis={noStealthDis} setNoStealthDis={setNoStealthDis}
                dmgType={dmgType} setDmgType={setDmgType}
                resetFilters={resetFilters}
            />

            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredItems.length === 0 ? (
                        <div className="col-span-full p-12 text-center text-c6 font-fantasy text-xl glass-panel rounded-xl border border-c6/50">
                            El oráculo no encuentra reliquias con estas condiciones.
                        </div>
                    ) : (
                        filteredItems.map(item => (
                            <ItemCard key={item.id} item={item} />
                        ))
                    )}
                </div>
            </section>
        </main>
    );
}
