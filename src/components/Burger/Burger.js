import React from 'react';

import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = (props) => {
    let recievedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            return <BurgerIngredient key={ingKey + i} type={ingKey} />;  
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (recievedIngredients.length === 0) {
        recievedIngredients = <p>Please start adding ingredients!</p>
    }
    console.log(recievedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {recievedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};


export default Burger;