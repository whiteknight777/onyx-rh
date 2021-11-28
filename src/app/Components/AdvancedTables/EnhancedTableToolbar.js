import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Toolbar, makeStyles, lighten,
    Typography
} from '@material-ui/core';

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    highlight:
    theme.palette.type === 'light'
        ? {
            color: theme.palette.primary.main,
            backgroundColor: lighten(theme.palette.primary.light, 0.85)
        }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.primary.dark
        },
    spacer: {
        flex: '1 1 100%'
    },
    actions: {
        color: theme.palette.text.primary
    },
    title: {
        flex: '0 0 auto',
        padding: '20px 0'
    },
    sizeTitle: {
        fontSize: '1.16rem'
    },
    sizeSubtitle: {
        fontSize: '.9rem'
    }
}));

// TABLE TOOLBAR COMPONENT
const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const {
        title, subtitle, actions
    } = props;

    return (
        <Toolbar
          className={classes.root}
        >
            <div className={classes.title}>
                <Typography variant="h6" id="tableTitle" className="">
                    {title}
                </Typography>
                <Typography variant="subtitle1" id="tableSubTitle" className="">
                    {subtitle}
                </Typography>
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {actions}
            </div>
        </Toolbar>
    );
};
EnhancedTableToolbar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

export default EnhancedTableToolbar;
