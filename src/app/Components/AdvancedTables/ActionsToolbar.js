import * as React from 'react';
import {
    Checkbox,
    Dialog,
    FormControl, IconButton, InputAdornment, List, ListItem, ListItemSecondaryAction,
    ListItemText, TextField, Tooltip
} from '@material-ui/core';
import {
    BiDotsVertical
} from 'react-icons/bi';
import SVG from 'react-inlinesvg';
import { FaRegTimesCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Popover from '@material-ui/core/Popover';
import Styles from './Styles-jss';
import { toAbsoluteUrl } from '../../../_metronic/_helpers';

function ActionsToolbar({ ...props }) {
    const classes = Styles();
    const {
        handleSearchSubmit, columns, hideColumns, addAction, refreshAction
    } = props;
    const [state, setState] = React.useState({
        searchValue: '',
        anchor: null,
        openColumnList: false
    });

    React.useEffect(() => () => {
        setState(prev => ({
            ...prev,
            searchValue: ''
        }));
    }, []);

    const handleKeyPress = (event) => {
        event.persist();
        if (event.key === 'Enter') {
            handleSearchSubmit(state.searchValue, 'find');
        }
    };

    const handleClose = () => {
        setState(prev => ({
            ...prev,
            openColumnList: false
        }));
    };

    const openColumnList = () => {
        setState(prev => ({
            ...prev,
            openColumnList: true
        }));
    };

    return (
        <div className={classes.root}>

            <FormControl
              variant="outlined"
              className={classes.researchInput}
            >
                <TextField
                  label=""
                  id="filled-size-small"
                  variant="outlined"
                  placeholder="Rechercher"
                  className={classes.input}
                  value={state.searchValue}
                  onChange={(e) => {
                      e.persist();
                      const { value } = e.target;
                      setState({
                          searchValue: value
                      });
                      handleSearchSubmit(value, 'find');
                  }}
                  onKeyPress={(e) => {
                      handleKeyPress(e);
                  }}
                  InputProps={{
                      endAdornment: (
                          <InputAdornment position="end">
                              {state.searchValue.length > 0 ? (
                                  <FaRegTimesCircle
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setState({
                                            searchValue: ''
                                        });
                                        handleSearchSubmit(state.searchValue, 'reset');
                                    }}
                                  />
                              ) : false}
                          </InputAdornment>
                      )
                  }}
                  size="small"
                />
            </FormControl>
            <Tooltip title="Actualiser">
                <IconButton
                  aria-label="Actualiser"
                  onClick={() => {
                      refreshAction();
                  }}
                >

                    <span className="text-md svg-icon">
                        <SVG
                          className={classes.svgIcon}
                          src={toAbsoluteUrl('/media/svg/icons/General/Update.svg')}
                        />
                    </span>
                </IconButton>
            </Tooltip>
            <Tooltip title="Ajouter">
                <IconButton
                  aria-label="Ajouter"
                  onClick={() => {
                      addAction();
                  }}
                >

                    <span className="text-md svg-icon">
                        <SVG
                          className={classes.svgIcon}
                          src={toAbsoluteUrl('/media/svg/icons/Navigation/Plus.svg')}
                        />
                    </span>
                </IconButton>
            </Tooltip>
            <Tooltip title="Liste des colonnes">
                <>
                    <IconButton
                      aria-label="Liste des colonnes"
                      onClick={(e) => {
                          setState(prev => ({
                              ...prev,
                              anchor: e.currentTarget
                          }));
                          openColumnList();
                      }}
                    >
                        <BiDotsVertical />
                    </IconButton>
                    <Popover
                      open={state.openColumnList !== undefined ? state.openColumnList : false}
                      anchorEl={state.anchor}
                      onClose={() => {
                          handleClose();
                      }}
                      anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left'
                      }}
                      transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right'
                      }}
                    >
                        <List
                          className={classes.columnsList}
                        >
                            <div className={classes.columnsBox}>
                                <h6>Liste des colonnes</h6>
                            </div>
                            {columns.map((column, key) => (
                                <ListItem
                                  key={key}
                                  dense
                                  button
                                  onClick={() => {
                                      hideColumns(key);
                                  }}
                                >
                                    <span id={key} className="text-sm py-1">{column.label}</span>
                                    <ListItemSecondaryAction>
                                        <Checkbox
                                          edge="start"
                                          checked={column.showColumn}
                                          tabIndex={-1}
                                          disableRipple
                                          onClick={() => {
                                              hideColumns(key);
                                          }}
                                          inputProps={{ 'aria-labelledby': column.label }}
                                        />
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </Popover>
                </>
            </Tooltip>
        </div>
    );
}

export default ActionsToolbar;
