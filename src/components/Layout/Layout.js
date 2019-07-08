import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from "../Navigation/Tollbar/Toolbar";

const layout = (props) => {
    return (
        <Auxiliary>
            <Toolbar />
            <main className={classes.Content}>{props.children}</main>
        </Auxiliary>
    )
};

export default layout;