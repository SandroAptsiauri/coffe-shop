import React from 'react';
import { useCoffeeContext } from '../contexts/CoffeeContext';
import { Link } from 'react-router-dom';

const IngredientList = () => {
    const { ingredients } = useCoffeeContext();

    return (
        <div>
            <h2>Ingredient Catalog</h2>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient.id}>
                        <Link to={`/ingredients/${ingredient.id}`}>
                            {ingredient.name} - ${ingredient.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientList;
