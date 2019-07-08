import React from 'react';

import classes from './Button.css';

const button = (props) => {
  const btnClasses = [classes.Button, classes[props.btnType]].join(' ');
  return (<button
    className={btnClasses}
    onClick={props.clicked}>{props.children}</button>)
};

export default button;