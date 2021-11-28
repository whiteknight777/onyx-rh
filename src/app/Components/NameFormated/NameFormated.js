import React from 'react';
import Styles from './Styles-jss';

const NameFormated = (props) => {
    const { name, noMargin, color } = props;
    const classes = Styles();
    const firstLetters = name?.substr(0, 2).toUpperCase();

    return (
        <div className={classes.root}>
            <span
              style={{ background: color }}
              className={classes.firstLetters}
            >
                {firstLetters}
            </span>
        </div>
    );
};

export default NameFormated;
