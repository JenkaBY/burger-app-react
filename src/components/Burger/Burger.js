import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import INGREDIENT from "../../shared/ingredient";

const burger = (props) => {
    const orderedIngredients = Object.keys(props.ingredients)
        .map(iType => [...Array(props.ingredients[iType])].map((_, index) => {
            return <BurgerIngredient key={iType + index} type={iType}/>;
        }))
        .reduce((arr, el) => arr.concat(el),[])
    ;
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={INGREDIENT.breadTop}/>
            {orderedIngredients.length ? orderedIngredients : <p>Please add ingredients.</p>}
            <BurgerIngredient type={INGREDIENT.breadBottom}/>
        </div>
    )
};

export default burger;