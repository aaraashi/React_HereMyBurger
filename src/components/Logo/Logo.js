import React from 'react';

import burgerLogo from '../../assets/burgerLogo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="HereMyBurger" />
    </div>
);

export default logo;