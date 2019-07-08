import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import BuildControls from "../../components/Burger/BuilderControls/BuildControls";
import orderCalculator from "./orderCalculator";
import Modal from "../../components/UI/Modal/Modal";

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
              salad: 0,
              bacon: 0,
              cheese: 0,
              meat: 1
            },
          purchasing: false
        };
        this.state.total = orderCalculator(this.state.ingredients);
    }

  addIngredientHandler = (ingredientType) => {
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[ingredientType] = updatedIngredients[ingredientType] + 1;
        this.setState({ingredients: updatedIngredients});
        this.updateTotal(updatedIngredients);
    };

    removeIngredientHandler = (ingredientType) => {
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[ingredientType] = updatedIngredients[ingredientType] - 1;
        this.setState({ingredients: updatedIngredients});
        this.updateTotal(updatedIngredients);
    };

  purchaseHandler = () => {
    // const {purchasing} = {...this.state.purchasing};
    this.setState({purchasing: true});
    // console.log("Order burger");
    };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    console.log("continue");
  };

    updateTotal = (ingredients) => {
        const calculatedTotal = orderCalculator(ingredients);
        this.setState({total: calculatedTotal});
    };

    isOrderable = () => {
        return Object.keys(this.state.ingredients).some(type => this.state.ingredients[type] > 0);
    };

    render() {
        const lessButtonsStates = {...this.state.ingredients};
        Object.keys(this.state.ingredients).forEach(ingKey => lessButtonsStates[ingKey] = this.state.ingredients[ingKey] <= 0);
        return (
            <Auxiliary>
              <Modal show={this.state.purchasing}>
                <OrderSummary ingredients={this.state.ingredients}
                              purchaseCancel={this.purchaseCancelHandler}
                              purchaseContinue={this.purchaseContinueHandler}/>
              </Modal>
              <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                  ingredients={this.ingredients}
                  addIngredient={this.addIngredientHandler}
                  removeIngredient={this.removeIngredientHandler}
                  lessButtonsDisabledStates={lessButtonsStates}
                  onOrderButton={this.purchaseHandler}
                  total={this.state.total}
                  disabledTotal={!this.isOrderable()}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;