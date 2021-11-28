import { Chip } from '@material-ui/core';
import React from 'react';
import { RiRefreshLine } from 'react-icons/ri';
import { GoInfo } from 'react-icons/go';
import Styles from './Styles-jss';

const RequestStatus = (props) => {
    const { value } = props;
    const classes = Styles();
    let message = '';
    let icon = null;
    let classeValue = null;
    switch (value) {
        case 0:
            message = 'En attente';
            icon = <GoInfo className={classes.icon} />;
            classeValue = classes.warning;
            break;
        case 1:
            message = 'En cours';
            icon = <RiRefreshLine className={classes.icon} />;
            classeValue = classes.chip;
            break;
        case 2:
            message = 'Validé';
            icon = <RiRefreshLine className={classes.icon} />;
            classeValue = classes.success;
            break;
        case 3:
            message = 'Refusé';
            icon = <RiRefreshLine className={classes.icon} />;
            classeValue = classes.reject;
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

export default RequestStatus;
