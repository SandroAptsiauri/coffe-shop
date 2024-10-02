import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CoffeeProvider } from './contexts/CoffeeContext';
import IngredientList from './components/IngredientList';
import CoffeeList from './components/CoffeeList';
import IngredientDetail from './pages/IngredientDetail';
import CoffeeDetail from './pages/CoffeeDetail';

const App = () => {
    return (
        <CoffeeProvider>
            <Router>
                <Switch>
                    <Route path="/ingredients/:id" component={IngredientDetail} />
                    <Route path="/coffees/:id" component={CoffeeDetail} />
                    <Route path="/ingredients" component={IngredientList} />
                    <Route path="/coffees" component={CoffeeList} />
                    <Route path="/" exact>
                        <h1>Welcome to the Coffee Shop</h1>
                    </Route>
                </Switch>
            </Router>
        </CoffeeProvider>
    );
};

export default App;

