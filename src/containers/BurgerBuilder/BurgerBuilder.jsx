import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuilderControls/BuildControls";
import orderCalculator from "./orderCalculator";

class BurgerBuilder extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                'salad': 0,
                'bacon': 0,
                'cheese': 0,
                'meat': 1
            }
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

    orderHandler = () => {
        this.updateTotal(this.state.ingredients);
        console.log("Order burger");
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
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredients={this.ingredients}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    lessButtonsDisabledStates={lessButtonsStates}
                    onOrderButton={this.orderHandler}
                    total={this.state.total}
                    disabledTotal={!this.isOrderable()}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;