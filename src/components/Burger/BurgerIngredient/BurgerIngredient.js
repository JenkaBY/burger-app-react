import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css'
import INGREDIENT from '../../../shared/ingredient'

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case INGREDIENT.breadTop:
                ingredient = (<div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>);
                break;
            case INGREDIENT.breadBottom:
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case INGREDIENT.salad:
                ingredient = <div className={classes.Salad}></div>
                break;
            case INGREDIENT.cheese:
                ingredient = <div className={classes.Cheese}></div>
                break;
            case INGREDIENT.meat:
                ingredient = <div className={classes.Meat}></div>
                break;
            case INGREDIENT.bacon:
                ingredient = <div className={classes.Bacon}></div>
                break;
            default:
                break;
        }
        return ingredient;
    }
}

BurgerIngredient.propsTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;