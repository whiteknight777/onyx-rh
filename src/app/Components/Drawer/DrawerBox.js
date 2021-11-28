import {
    Drawer
} from '@material-ui/core';
import React from 'react';

function DrawerBox(props) {
    const {
        open, onClose, anchor, children, variant
    } = props;
    const [state, setState] = React.useState({
        open: false,
        trashed: false
    });

    React.useEffect(() => {
        setState(prev => ({
            ...prev,
            open
        }));
    }, [open]);

    return (
        <Drawer
          anchor={anchor}
          open={state.open}
          variant={variant}
          onClose={() => {
              onClose();
          }}
        >
            {children}
        </Drawer>
    );
}

export default DrawerBox;
