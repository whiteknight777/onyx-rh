import { Grid, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../../../_metronic/_helpers';
import TabPanel from '../../../Components/TabPanel/TabPanel';
import { UserContext } from '../../../modules/Auth/contexts/userProvider';
import Collaborators from './Collaborators/Collaborators';
import Informations from './Informations/Informations';
import OrganizationChart from './OrganizationChart/OrganizationChart';
import Settings from './Settings/Settings';

const ShowTeam = (props) => {
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
                    <div className="card card-custom mb-2">
                        <div className="card-body">
                            <div className="d-flex ">
                                <div className="flex-shrink-0 mr-7">
                                    <div className="symbol symbol-circle symbol-50 symbol-lg-120 symbol-light-danger">
                                        <span className="font-size-h3 symbol-label font-weight-boldest">DSI</span>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">

                                        <div className="mr-3">

                                            <a href="/" className="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">
                                                DSI
                                            </a>

                                            <div className="d-flex flex-wrap my-2">
                                                <a href="/" className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                    <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">

                                                        <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <i
                                                              className="flaticon-multimedia-2 text-hover-primary
                                                          icon-md mr-2"
                                                            />
                                                        </span>

                                                    </span>
                                                    matt@stream.com
                                                </a>
                                                <a href="/" className="text-muted text-hover-primary font-weight-bold">
                                                    <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">

                                                        <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <i
                                                              className="flaticon2-location text-hover-primary
                                                          icon-md mr-2"
                                                            />
                                                        </span>

                                                    </span>
                                                    Paris, France
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

                            <div className="separator separator-solid my-7" />

                            <div className="d-flex align-items-center flex-wrap">
                                <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">
                                    <span className="mr-4">
                                        <i className="flaticon-time-1 icon-2x text-muted font-weight-bold" />
                                    </span>
                                    <div className="d-flex flex-column text-dark-75">
                                        <span className="font-weight-bolder font-size-sm">Heures de travil</span>
                                        <a href="/" className="text-primary font-weight-bolder">
                                            145,200
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">
                                    <span className="mr-4">
                                        <i className="flaticon-earth-globe icon-2x text-muted font-weight-bold" />
                                    </span>
                                    <div className="d-flex flex-column text-dark-75">
                                        <span className="font-weight-bolder font-size-sm">Absences</span>
                                        <a href="/" className="text-primary font-weight-bolder">
                                            274
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">
                                    <div className="d-flex flex-column text-dark-75">
                                        <span className="font-weight-bolder font-size-sm">Membres</span>
                                        <div className="symbol-group symbol-hover">
                                            <div className="symbol symbol-30 symbol-circle" data-toggle="tooltip" title="Mark Stone">
                                                <img alt="Pic" src={toAbsoluteUrl('/media/users/300_25.jpg')} />
                                            </div>
                                            <div className="symbol symbol-30 symbol-circle" data-toggle="tooltip" title="Charlie Stone">
                                                <img alt="Pic" src={toAbsoluteUrl('/media/users/300_19.jpg')} />
                                            </div>
                                            <div className="symbol symbol-30 symbol-circle" data-toggle="tooltip" title="Luca Doncic">
                                                <img alt="Pic" src={toAbsoluteUrl('/media/users/300_22.jpg')} />
                                            </div>
                                            <div className="symbol symbol-30 symbol-circle" data-toggle="tooltip" title="Nick Mana">
                                                <img alt="Pic" src={toAbsoluteUrl('/media/users/300_23.jpg')} />
                                            </div>
                                            <div className="symbol symbol-30 symbol-circle" data-toggle="tooltip" title="Teresa Fox">
                                                <img alt="Pic" src={toAbsoluteUrl('/media/users/300_18.jpg')} />
                                            </div>
                                            <div className="symbol symbol-30 symbol-circle symbol-light">
                                                <span className="symbol-label font-weight-bold">5+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">
                                    <span className="mr-4">
                                        <i className="flaticon2-calendar-8 icon-2x text-muted font-weight-bold" />
                                    </span>
                                    <div className="d-flex flex-column flex-lg-fill">
                                        <span className="text-dark-75 font-weight-bolder font-size-sm">Planning</span>
                                        <a href="/" className="text-primary font-weight-bolder">voir</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">
                                    <span className="mr-4">
                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold" />
                                    </span>
                                    <div className="d-flex flex-column">
                                        <span className="text-dark-75 font-weight-bolder font-size-sm">Créer</span>
                                        <a href="/" className="text-primary font-weight-bolder">enquête</a>
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
                                  {...a11yProps(0)}
                                />
                                <Tab
                                  label={(
                                      <div className="d-flex justify-start align-items-center">
                                          <i
                                            className={`${value === 1 ? 'text-primary' : 'text-muted'}
                                            flaticon2-group icon-md mr-3 my-2 my-lg-0`}
                                          />
                                          <span className="text-capitalize text-sm">Collaborateurs</span>
                                      </div>
                                )}
                                  {...a11yProps(1)}
                                />
                                <Tab
                                  label={(
                                      <div className="d-flex justify-start align-items-center">
                                          <i
                                            className={`${value === 2 ? 'text-primary' : 'text-muted'}
                                        flaticon-map icon-md mr-3 my-2 my-lg-0`}
                                          />
                                          <span className="text-capitalize text-sm">Organigramme</span>
                                      </div>
                                 )}
                                  {...a11yProps(2)}
                                />
                                <Tab
                                  label={(
                                      <div className="d-flex justify-start align-items-center">
                                          <i
                                            className={`${value === 3 ? 'text-primary' : 'text-muted'}
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
                                    <Collaborators />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <OrganizationChart />
                                </TabPanel>
                                <TabPanel value={value} index={3}>
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

export default ShowTeam;
