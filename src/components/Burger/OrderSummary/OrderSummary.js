import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
        return (
        <li><span style={{textTransform: 'capitalize'}}>
            {ingKey}</span>: {props.ingredients[ingKey]}
        </li>
        );
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: ${props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" 
            clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" 
            clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;