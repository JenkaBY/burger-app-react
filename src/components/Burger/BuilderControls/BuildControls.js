import React from 'react';

import INGREDIENT from "../../../shared/ingredient";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: INGREDIENT.salad},
    {label: 'Cheese', type: INGREDIENT.cheese},
    {label: 'Meat', type: INGREDIENT.meat},
    {label: 'Bacon', type: INGREDIENT.bacon},
];

const buildControls = (props) => {
    const buildControls = controls.map((control, index) =>
        <BuildControl
            key={control.type+index}
            onLessButtonClicked={()=> props.removeIngredient(control.type)}
            onMoreButtonClicked={() => props.addIngredient(control.type)}
            label={control.label}
            lessButtonDisabled={props.lessButtonsDisabledStates[control.type]}
        />
    );
    return (<div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.total}</strong></p>
        {buildControls}
        <button type="button"
                className={classes.OrderButton}
                disabled={props.disabledTotal}
                onClick={props.onOrderButton}
        >{'Order now'.toLocaleUpperCase()}</button>
    </div>)
};

export default buildControls;