import React from 'react';
import { FcFolder, FcFile } from 'react-icons/fc';
import Styles from './Styles-jss';

const TypeDoc = (props) => {
    const { value } = props;
    const classes = Styles();
    let icon = null;
    switch (value) {
        case 'Folder':
            icon = <FcFolder className={classes.icon} />;
            break;
        case 'File':
            icon = <FcFile className={classes.icon} />;
            break;
        default:
            break;
    }

    return (
        <div className={classes.root}>
            {icon}
        </div>
    );
};

export default TypeDoc;
