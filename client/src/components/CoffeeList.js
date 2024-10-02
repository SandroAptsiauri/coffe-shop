import React from 'react';
import { useCoffeeContext } from '../contexts/CoffeeContext';
import { Link } from 'react-router-dom';

const CoffeeList = () => {
    const { coffees } = useCoffeeContext();

    return (
        <div>
            <h2>Coffee Catalog</h2>
            <ul>
                {coffees.map((coffee) => (
                    <li key={coffee.id}>
                        <Link to={`/coffees/${coffee.id}`}>
                            {coffee.title} - Total Price: ${(coffee.totalPrice).toFixed(2)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoffeeList;
