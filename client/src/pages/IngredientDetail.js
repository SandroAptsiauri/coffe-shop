import React from 'react';
import { useParams } from 'react-router-dom';
import { useCoffeeContext } from '../contexts/CoffeeContext';

const IngredientDetail = () => {
    const { id } = useParams();
    const { ingredients } = useCoffeeContext();
    const ingredient = ingredients.find((ing) => ing.id === parseInt(id));

    if (!ingredient) return <p>Ingredient not found!</p>;

    return (
        <div>
            <h2>{ingredient.name}</h2>
            <p>Price: ${ingredient.price}</p>
            <p>Description: {ingredient.description}</p>
        </div>
    );
};

export default IngredientDetail;
