import React from 'react';

import NavigationItem from "./NaviagtionItem/NavigationItem";
import classes from './NavigationItems.css';

const navigationItems = (props) => {
  return (<ul className={classes.NavigationItems}>
    <NavigationItem href={'#'} active={true}>Burger Builder</NavigationItem>
    <NavigationItem href={'#'}>Checkout</NavigationItem>
  </ul>);
};

export default navigationItems;