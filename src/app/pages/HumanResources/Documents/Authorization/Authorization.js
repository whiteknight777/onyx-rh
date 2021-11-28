import { Chip } from '@material-ui/core';
import React from 'react';
import { IoFingerPrint } from 'react-icons/io5';
import { AiFillLock } from 'react-icons/ai';
import { GoInfo } from 'react-icons/go';
import Styles from './Styles-jss';

const Authorization = (props) => {
    const { value } = props;
    const classes = Styles();
    let message = '';
    let icon = null;
    let classeValue = null;
    switch (value) {
        case 2:
            message = 'Public';
            icon = <GoInfo className={classes.icon} />;
            classeValue = classes.success;
            break;
        case 1:
            message = 'Privé';
            icon = <AiFillLock className={classes.icon} />;
            classeValue = classes.info;
            break;
        case 0:
            message = 'Restreint';
            icon = <IoFingerPrint className={classes.icon} />;
            classeValue = classes.danger;
            break;
        default:
            break;
    }

    return (
        <div className={classes.root}>
            <Chip className={classeValue} icon={icon} label={message} />
        </div>
    );
};

export default Authorization;
