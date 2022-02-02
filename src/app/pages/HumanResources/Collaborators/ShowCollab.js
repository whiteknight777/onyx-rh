import { Grid, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../../../_metronic/_helpers';
import TabPanel from '../../../Components/TabPanel/TabPanel';
import { UserContext } from '../../../modules/Auth/contexts/userProvider';
import AccessManager from './AccessManager/AccessManager';
import Informations from './Informations/Informations';
import Settings from './Settings/Settings';
import Activities from './Activities/Activities';

const ShowCollab = (props) => {
    const { userStore } = React.useContext(UserContext);
    const { user } = userStore;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const a11yProps = (index) => ({
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`
    });

    return (
        <>
            <Grid container spacing={0} direction="column">
                <Grid item xs={12}>
                    <div className="card card-custom mb-2 no-print">
                        <div className="card-body">
                            <div className="d-flex ">
                                <div className="flex-shrink-0 mr-7">
                                    <div className="symbol symbol-circle symbol-50 symbol-lg-120 symbol-light-danger">
                                        <img alt="Pic" src={toAbsoluteUrl('/media/users/300_1.jpg')} />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">

                                        <div className="mr-3">

                                            <a href="/" className="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">
                                                David Smith
                                                {/* <i className="flaticon2-correct text-success icon-md ml-2" /> */}
                                                <span className="label label-light-danger
                                                label-inline font-weight-bolder ml-1"
                                                >
                                                    Marketing
                                                </span>
                                            </a>

                                            <div className="d-flex flex-wrap my-2">
                                                <a href="/" className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                    <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">

                                                        <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <i
                                                              className="flaticon-user text-hover-primary
                                                          icon-md mr-2"
                                                            />
                                                        </span>

                                                    </span>
                                                    david.s@loop.com
                                                </a>
                                                <a href="/" className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                    <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">

                                                        <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <i
                                                              className="flaticon2-rocket-1 text-hover-primary
                                                          icon-md mr-2"
                                                            />
                                                        </span>

                                                    </span>
                                                    Chef de projet
                                                </a>
                                                <a href="/" className="text-muted text-hover-primary font-weight-bold">
                                                    <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">

                                                        <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <i
                                                              className="flaticon2-position text-hover-primary
                                                          icon-md mr-2"
                                                            />
                                                        </span>

                                                    </span>
                                                    Lyon (France)
                                                </a>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="d-flex align-items-center flex-wrap justify-content-between">
                                        <div className="flex-grow-2 mr-5">
                                            I distinguish three main text objectives could be merely to inform people.
                                            <br />
                                            A second could be persuade people. You want people to bay objective.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className="card card-custom">
                        <div className="card-body px-0 py-0">
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              indicatorColor="primary"
                              className="no-print"
                              textColor="primary"
                              variant="scrollable"
                              scrollButtons="auto"
                              aria-label="scrollable auto tabs example"
                            >
                                <Tab
                                  label={(
                                      <div className="d-flex justify-start align-items-center">
                                          <i
                                            className={`${value === 0 ? 'text-primary' : 'text-muted'}
                                        flaticon2-list-2 icon-md mr-3 my-2 my-lg-0`}
                                          />
                                          <span className="text-capitalize text-sm">Informations</span>
                                      </div>
                            )}
                                  {...a11yProps(1)}
                                />
                                <Tab
                                  label={(
                                      <div className="d-flex justify-start align-items-center">
                                          <i
                                            className={`${value === 1 ? 'text-primary' : 'text-muted'}
                                        flaticon2-shield icon-md mr-3 my-2 my-lg-0`}
                                          />
                                          <span className="text-capitalize text-sm">Compte</span>
                                      </div>
                            )}
                                  {...a11yProps(2)}
                                />
                                <Tab
                                  label={(
                                      <div className="d-flex justify-start align-items-center">
                                          <i
                                            className={`${value === 2 ? 'text-primary' : 'text-muted'}
                                        flaticon-settings icon-md mr-3 my-2 my-lg-0`}
                                          />
                                          <span className="text-capitalize text-sm">Paramètres</span>
                                      </div>
                            )}
                                  {...a11yProps(3)}
                                />
                            </Tabs>

                            <div className="tab-content">
                                <TabPanel value={value} index={0}>
                                    <Informations />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <AccessManager />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Settings />
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default ShowCollab;
