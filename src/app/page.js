
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
    const [appliedFilters, setAppliedFilters] = useState({
        categoria: '',
        subCategoria: '',
        maxPrice: '',
        maxWeight: '',
        minAc: '',
        noStealthDis: false,
        dmgType: ''
    });

    const resetFilters = () => {
        setCategoria('');
        setSubCategoria('');
        setMaxPrice('');
        setMaxWeight('');
        setMinAc('');
        setNoStealthDis(false);
        setDmgType('');
        setAppliedFilters({
            categoria: '',
            subCategoria: '',
            maxPrice: '',
            maxWeight: '',
            minAc: '',
            noStealthDis: false,
            dmgType: ''
        });
    };

    const aplicarFiltros = () => {
        setAppliedFilters({
            categoria,
            subCategoria,
            maxPrice,
            maxWeight,
            minAc,
            noStealthDis,
            dmgType
        });
    };

    const filteredItems = useMemo(() => {
        return mockItems.filter(item => {
            if (appliedFilters.categoria && item.category !== appliedFilters.categoria) return false;
            if (appliedFilters.subCategoria && item.subcategory !== appliedFilters.subCategoria) return false;
            if (appliedFilters.maxWeight && item.weight > parseFloat(appliedFilters.maxWeight)) return false;
            
            if (appliedFilters.maxPrice) {
                const itemGoldValue = (item.price.platino * 10) + item.price.oro + (item.price.plata / 10) + (item.price.bronce / 100);
                if (itemGoldValue > parseFloat(appliedFilters.maxPrice)) return false;
            }
            
            if (appliedFilters.categoria === 'armor') {
                if (appliedFilters.minAc && item.armor_class < parseInt(appliedFilters.minAc)) return false;
                if (appliedFilters.noStealthDis && item.stealth_disadvantage === true) return false;
            }
            if (appliedFilters.categoria === 'weapons') {
                if (appliedFilters.dmgType && item.damage_type !== appliedFilters.dmgType) return false;
            }
            
            return true;
        });
    }, [appliedFilters]);

    return (
        <main className="page-shell">
            <FiltrosRitual 
                categoria={categoria} setCategoria={setCategoria}
                subCategoria={subCategoria} setSubCategoria={setSubCategoria}
                maxPrice={maxPrice} setMaxPrice={setMaxPrice}
                maxWeight={maxWeight} setMaxWeight={setMaxWeight}
                minAc={minAc} setMinAc={setMinAc}
                noStealthDis={noStealthDis} setNoStealthDis={setNoStealthDis}
                dmgType={dmgType} setDmgType={setDmgType}
                resetFilters={resetFilters}
                aplicarFiltros={aplicarFiltros}
            />

            <section>
                <div className="item-grid">
                    {filteredItems.length === 0 ? (
                        <div className="empty-state">
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
