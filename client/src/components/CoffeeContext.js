import React, { createContext, useContext, useState, useEffect } from 'react';

const CoffeeContext = createContext();

export const useCoffeeContext = () => {
    return useContext(CoffeeContext);
};

export const CoffeeProvider = ({ children }) => {
    const [ingredients, setIngredients] = useState([]);
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetchIngredients();
        fetchCoffees();
    }, []);

    const fetchIngredients = async () => {
        const response = await fetch('https://crudapi.co.uk/api/v1/ingredients');
        const data = await response.json();
        setIngredients(data);
    };

    const fetchCoffees = async () => {
        const response = await fetch('https://crudapi.co.uk/api/v1/coffees');
        const data = await response.json();
        setCoffees(data);
    };

    return (
        <CoffeeContext.Provider value={{ ingredients, coffees }}>
            {children}
        </CoffeeContext.Provider>
    );
};
