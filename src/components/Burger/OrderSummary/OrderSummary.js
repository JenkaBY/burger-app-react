import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";
import orderCalculator from "../../../containers/BurgerBuilder/orderCalculator";


const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (<li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li>)
    });

  return (
    <Auxiliary>
      <h3>Order summary</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{orderCalculator(props.ingredients)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType={'Danger'} clicked={props.purchaseCancel} >CANCEL</Button>
      <Button btnType={'Success'} clicked={props.purchaseContinue} >CONTINUE</Button>
    </Auxiliary>
  );
};

export default orderSummary;