
"use client";
import { createContext, useState } from 'react';

export const MercaderContext = createContext();

export function MercaderProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDrawer = (state) => setIsOpen(state);
    const openCalculator = (item) => {
        setSelectedItem(item);
        setIsOpen(true);
    };

    return (
        <MercaderContext.Provider value={{ isOpen, toggleDrawer, selectedItem, openCalculator }}>
            {children}
        </MercaderContext.Provider>
    );
}
