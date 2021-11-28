import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const TabPanel = (props) => {
    const {
        children, value, index, ...other
    } = props;

    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`scrollable-auto-tabpanel-${index}`}
          aria-labelledby={`scrollable-auto-tab-${index}`}
          {...other}
        >
            {value === index && (
            <Box p={3}>
                {children}
            </Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

TabPanel.defaultProps = {
    children: (<></>)
};
export default TabPanel;
