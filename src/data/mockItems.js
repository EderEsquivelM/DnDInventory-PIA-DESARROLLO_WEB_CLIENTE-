
export const mockItems = [
    { id: 1, name: 'Poción de Curación Mayor', category: 'consumables', subcategory: 'potion', price: { platino: 0, oro: 50, plata: 0, bronce: 0 }, weight: 0.2, desc: 'El líquido rojo brilla débilmente. Recupera 4d4+4 Puntos de Golpe.' },
    { id: 2, name: 'Armadura de Cuero Tachonado', category: 'armor', subcategory: 'light', price: { platino: 0, oro: 45, plata: 0, bronce: 0 }, weight: 6.5, desc: 'Cuero reforzado con remaches de metal para mayor protección.', armor_class: 12, stealth_disadvantage: false },
    { id: 3, name: 'Placas Completas', category: 'armor', subcategory: 'heavy', price: { platino: 1, oro: 500, plata: 0, bronce: 0 }, weight: 32.5, desc: 'Forjada a medida para el portador. Otorga una defensa formidable.', armor_class: 18, strength_requirement: 15, stealth_disadvantage: true },
    { id: 4, name: 'Mandoble del Verdugo', category: 'weapons', subcategory: 'martial', price: { platino: 0, oro: 50, plata: 0, bronce: 0 }, weight: 3.0, desc: 'Requiere dos manos. (2d6).', damage_type: 'slashing' },
    { id: 5, name: 'Ballesta Pesada', category: 'weapons', subcategory: 'martial', price: { platino: 0, oro: 50, plata: 0, bronce: 0 }, weight: 9.0, desc: 'Lenta pero devastadora. Daño (1d10).', damage_type: 'piercing' },
    { id: 6, name: 'Caballo de Guerra', category: 'travel', subcategory: 'mounts', price: { platino: 0, oro: 400, plata: 0, bronce: 0 }, weight: 0, desc: 'Entrenado para no asustarse en combate. Velocidad 60 pies.', speed: 60, carrying_capacity: 540 }
];
