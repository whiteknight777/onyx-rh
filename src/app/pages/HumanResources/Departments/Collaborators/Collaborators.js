import * as React from 'react';
import {
    Avatar, Divider, InputAdornment, List, ListItem, ListItemAvatar, FormControl,
    ListItemText, TextField, Typography, IconButton, ListItemSecondaryAction, ListSubheader
} from '@material-ui/core';
import { FaRegTimesCircle } from 'react-icons/fa';
import { toAbsoluteUrl } from '../../../../../_metronic/_helpers';
import BtnActions from '../../../../Components/BtnActions/BtnActions';

const researchInput = {
    display: 'flex',
    flexFlow: 'row reverse',
    alignItems: 'center'
};
const input = {
    margin: '0 9px',
    width: '100%'
};

export default function Collaborators() {
    const [state, setState] = React.useState({
        searchValue: '',
        collaborateurs: [
            {
                fullname: 'Ali Connors',
                job: 'Team lead',
                email: 'theboss.io@society.com',
                pic: '/media/users/300_1.jpg'
            },
            {
                fullname: 'Sandra Adams',
                job: 'Lead developpeur',
                email: 'sandra.io@society.com',
                pic: '/media/users/300_2.jpg'
            },
            {
                fullname: 'Alex Thimoté',
                job: 'Ux Designer',
                email: 'theboss.io@society.com',
                pic: '/media/users/300_3.jpg'
            }
        ]
    });

    return (

        <div className="row">
            <div className="col-xl-12 px-10 pr-15">
                <FormControl variant="outlined" style={researchInput} className="pl-5">
                    <TextField
                      label=""
                      id="filled-size-small"
                      variant="outlined"
                      placeholder="Rechercher"
                      style={input}
                      value={state.searchValue}
                      onChange={(e) => {
                          e.persist();
                          const { value } = e.target;
                          setState(prev => ({
                              ...prev,
                              searchValue: value
                          }));
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
                                        }}
                                      />
                                  ) : false}
                              </InputAdornment>
                          )
                      }}
                      size="small"
                    />
                </FormControl>
                <List
                  subheader={(
                      <ListSubheader component="div" id="nested-list-subheader">
                          10 Collaborateur(s)
                      </ListSubheader>
                  )}
                  sx={{ width: '100%', maxWidth: 360 }}
                  className="my-5"
                >
                    {state.collaborateurs.map((col, k) => (
                        <>
                            <ListItem key={k} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={col.fullname} src={toAbsoluteUrl(col.pic)} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary={col.fullname}
                                  secondary={(
                                      <>
                                          <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="primary"
                                          >
                                              {col.job}
                                          </Typography>
                                          {` — ${col.email}`}
                                      </>
                                )}
                                />
                                <ListItemSecondaryAction>
                                    <BtnActions
                                      type="show"
                                      handleClick={() => {
                                          console.log('fired!');
                                      }}
                                      label="Details collaborateur"
                                      icon={null}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                            {k < state.collaborateurs.length - 1 ? (
                                <Divider variant="inset" component="li" />
                            ) : false}

                        </>
                    ))}
                </List>
            </div>
        </div>
    );
}
