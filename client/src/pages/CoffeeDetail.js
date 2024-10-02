import React from 'react';
import { useParams } from 'react-router-dom';
import { useCoffeeContext } from '../contexts/CoffeeContext';

const CoffeeDetail = () => {
    const { id } = useParams();
    const { coffees } = useCoffeeContext();
    const coffee = coffees.find((c) => c.id === parseInt(id));

    if (!coffee) return <p>Coffee not found!</p>;

    return (
        <div>
            <h2>{coffee.title}</h2>
            <p>Description: {coffee.description}</p>
            <p>Ingredients: {coffee.ingredients.join(', ')}</p>
            <p>Total Price: ${(coffee.totalPrice).toFixed(2)}</p>
        </div>
    );
};

export default CoffeeDetail;
