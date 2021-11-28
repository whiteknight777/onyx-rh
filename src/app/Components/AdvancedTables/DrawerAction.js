import {
    Drawer, IconButton, List, ListItem, ListItemIcon,
    ListSubheader, Tooltip
} from '@material-ui/core';
import React from 'react';
import { BiTrash } from 'react-icons/bi';
import Styles from './Styles-jss';

function DrawerAction(props) {
    const { numSelected, onClose } = props;
    const classes = Styles();
    const [state, setState] = React.useState({
        open: false,
        trashed: false
    });

    React.useEffect(() => {
        setState(prev => ({
            ...prev,
            open: numSelected > 0
        }));
    }, [numSelected]);

    return (
        <Drawer
          anchor="bottom"
          open={state.open}
          variant="persistent"
          onClose={() => {
              onClose();
          }}
        >

            <List
              subheader={(
                  <ListSubheader className={classes.drawerTitle}>
                      <b>{numSelected}</b>
                      <span style={{ padding: '0 3px' }}>ligne(s) selectionnée(s)</span>
                  </ListSubheader>
                )}
              className={classes.drawerBox}
            >
                <ListItem className={classes.drawerContent}>
                    <ListItemIcon>
                        <Tooltip title="Supprimer">
                            <IconButton
                              aria-label="Supprimer"
                            >
                                <BiTrash />
                            </IconButton>
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemIcon>
                        <div className="row">
                            <div className="col-xl-6 d-flex align-items-center">
                                <span
                                  aria-hidden
                                  className="switch mr-2"
                                  onClick={() => {
                                      setState(prev => ({
                                          ...prev,
                                          trashed: !prev.trashed
                                      }));
                                  }}
                                >
                                    <input
                                      type="checkbox"
                                      checked={state.trashed}
                                      name="elemt_trashed"
                                      onChange={() => {
                                          console.log('fired!');
                                      }}
                                    />
                                    <span />
                                </span>
                                Archiver
                            </div>
                        </div>
                    </ListItemIcon>
                </ListItem>

            </List>
        </Drawer>
    );
}

export default DrawerAction;
