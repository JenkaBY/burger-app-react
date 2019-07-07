import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.label}</label>
            <button type='button'
                    className={classes.Less}
                    onClick={props.onLessButtonClicked}
                    disabled={props.lessButtonDisabled}>Less
            </button>
            <button
                type='button'
                className={classes.More}
                onClick={props.onMoreButtonClicked}>More
            </button>
            `
        </div>
    )
};

export default buildControl;