import React from 'react';
import Styles from './TypeDoc/Styles-jss';

const Explorer = (props) => {
    const { label, type, openFolder } = props;
    const classes = Styles();
    let content = null;
    switch (type) {
        case 'Folder':
            content = (
                <span
                  aria-hidden
                  onClick={() => {
                      openFolder();
                  }}
                  className={classes.findFolder}
                >
                    {label}
                </span>
            );
            break;
        case 'File':
            content = label;
            break;
        default:
            break;
    }

    return (
        <div className={classes.root}>
            {content}
        </div>
    );
};

export default Explorer;
