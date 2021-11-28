import React from 'react';
import './Feed.scss';
import { Grid } from '@material-ui/core';
import { Timeline } from 'react-twitter-widgets';
import { toAbsoluteUrl } from '../../../../_metronic/_helpers';

// eslint-disabled-next-line
const Feeds = () => {
    const [state, setState] = React.useState({
        filters: [
            { name: 'demandeur', label: 'Demandeur' },
            { name: 'equipe', label: 'Equipe' }
        ],
        advancedSearch: false
    });

    return (
        <Grid container spacing={4}>

            <Grid item xs={12} md={12}>
                <div className="card card-custom">
                    <div className="card-body rounded p-0 d-flex bg-light">
                        <div className="d-flex flex-column py-10 py-md-14 px-10 px-md-10 pr-lg-0">
                            <h1 className="font-weight-bolder text-md text-dark mb-0">Partagez et retrouver</h1>
                            <div className="text-sm mb-8">
                                {'toute l\'actualité de votre entreprise'}
                            </div>
                            <div className="d-flex flex-lg-row-auto w-auto w-lg-350px w-xl-450px w-xxl-650px align-items-center">
                                <form className="d-flex flex-center py-2 pl-6 bg-white rounded w-xxl-650px">
                                    <span className="svg-icon svg-icon-lg svg-icon-primary">

                                        <i
                                          className={`
                                        flaticon-search icon-md mr-3 my-2 my-lg-0`}
                                        />
                                    </span>
                                    <input type="text" className="form-control border-0 font-weight-bold pl-2" placeholder="Recherchez une publication" />

                                </form>
                                <span role="button" className="mx-5 btn p-4 btn-icon btn-primary btn-shadow-hover">
                                    <i className="flaticon2-soft-icons" />
                                </span>
                            </div>
                        </div>
                        <div
                          className="d-none d-md-flex flex-row-fluid bgi-no-repeat bgi-position-y-center bgi-position-x-left bgi-size-cover"
                          style={{
                              backgroundImage: `url(${toAbsoluteUrl('/media/svg/illustrations/copy.svg')})`,
                              backgroundPosition: '6em -10em'
                          }}
                        />
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <div className="card card-custom gutter-b">
                    <div className="card-body">
                        <div>
                            <div className="d-flex align-items-center">
                                <div className="symbol symbol-40 symbol-light-success mr-5">
                                    <span className="symbol-label">
                                        <img src={toAbsoluteUrl('/media/svg/avatars/009-boy-4.svg')} className="h-75 align-self-end" alt="" />
                                    </span>
                                </div>
                                <div className="d-flex flex-column flex-grow-1">
                                    <a href="/" className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">Nikky Peres</a>
                                    <span className="text-muted font-weight-bold">Yestarday at 5:06 PM</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-dark-75 font-size-lg font-weight-normal pt-5 mb-2">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</p>

                                <div className="separator separator-solid mt-4 mb-4" />
                                <div className="d-flex align-items-center">
                                    <a href="/" className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
                                        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-2">
                                            <i className="flaticon2-chat-1" />
                                        </span>
                                        24
                                    </a>
                                    <a href="/" className="btn btn-sm btn-text-dark-50 btn-hover-icon-danger btn-hover-text-danger bg-hover-light-danger font-weight-bolder rounded font-size-sm p-2">
                                        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
                                            <i className="fas fa-heart" />
                                        </span>
                                        75
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-custom gutter-b">
                    <div className="card-body">
                        <div>
                            <div className="d-flex align-items-center">
                                <div className="symbol symbol-40 symbol-light-success mr-5">
                                    <span className="symbol-label">
                                        <img src={toAbsoluteUrl('/media/svg/avatars/009-boy-4.svg')} className="h-75 align-self-end" alt="" />
                                    </span>
                                </div>
                                <div className="d-flex flex-column flex-grow-1">
                                    <a href="/" className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">Nikky Peres</a>
                                    <span className="text-muted font-weight-bold">Yestarday at 5:06 PM</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-dark-75 font-size-lg font-weight-normal pt-5 mb-2">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</p>

                                <div className="separator separator-solid mt-4 mb-4" />
                                <div className="d-flex align-items-center">
                                    <a href="/" className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
                                        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-2">
                                            <i className="flaticon2-chat-1" />
                                        </span>
                                        24
                                    </a>
                                    <a href="/" className="btn btn-sm btn-text-dark-50 btn-hover-icon-danger btn-hover-text-danger bg-hover-light-danger font-weight-bolder rounded font-size-sm p-2">
                                        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
                                            <i className="fas fa-heart" />
                                        </span>
                                        75
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-custom gutter-b">
                    <div className="card-body">
                        <div>
                            <div className="d-flex align-items-center">
                                <div className="symbol symbol-40 symbol-light-success mr-5">
                                    <span className="symbol-label">
                                        <img src={toAbsoluteUrl('/media/svg/avatars/009-boy-4.svg')} className="h-75 align-self-end" alt="" />
                                    </span>
                                </div>
                                <div className="d-flex flex-column flex-grow-1">
                                    <a href="/" className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">Nikky Peres</a>
                                    <span className="text-muted font-weight-bold">Yestarday at 5:06 PM</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-dark-75 font-size-lg font-weight-normal pt-5 mb-2">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</p>

                                <div className="separator separator-solid mt-4 mb-4" />
                                <div className="d-flex align-items-center">
                                    <a href="/" className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
                                        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-2">
                                            <i className="flaticon2-chat-1" />
                                        </span>
                                        24
                                    </a>
                                    <a href="/" className="btn btn-sm btn-text-dark-50 btn-hover-icon-danger btn-hover-text-danger bg-hover-light-danger font-weight-bolder rounded font-size-sm p-2">
                                        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
                                            <i className="fas fa-heart" />
                                        </span>
                                        75
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-custom gutter-b">
                    <div className="card-body">
                        <div>
                            <div className="d-flex align-items-center">
                                <div className="symbol symbol-40 symbol-light-success mr-5">
                                    <span className="symbol-label">
                                        <img src={toAbsoluteUrl('/media/svg/avatars/009-boy-4.svg')} className="h-75 align-self-end" alt="" />
                                    </span>
                                </div>
                                <div className="d-flex flex-column flex-grow-1">
                                    <a href="/" className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">Nikky Peres</a>
                                    <span className="text-muted font-weight-bold">Yestarday at 5:06 PM</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-dark-75 font-size-lg font-weight-normal pt-5 mb-2">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</p>

                                <div className="separator separator-solid mt-4 mb-4" />
                                <div className="d-flex align-items-center">
                                    <a href="/" className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
                                        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-2">
                                            <i className="flaticon2-chat-1" />
                                        </span>
                                        24
                                    </a>
                                    <a href="/" className="btn btn-sm btn-text-dark-50 btn-hover-icon-danger btn-hover-text-danger bg-hover-light-danger font-weight-bolder rounded font-size-sm p-2">
                                        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
                                            <i className="fas fa-heart" />
                                        </span>
                                        75
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-custom gutter-b">
                    <div className="card-body">
                        <div>
                            <div className="d-flex align-items-center">
                                <div className="symbol symbol-40 symbol-light-success mr-5">
                                    <span className="symbol-label">
                                        <img src={toAbsoluteUrl('/media/svg/avatars/009-boy-4.svg')} className="h-75 align-self-end" alt="" />
                                    </span>
                                </div>
                                <div className="d-flex flex-column flex-grow-1">
                                    <a href="/" className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">Nikky Peres</a>
                                    <span className="text-muted font-weight-bold">Yestarday at 5:06 PM</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-dark-75 font-size-lg font-weight-normal pt-5 mb-2">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</p>

                                <div className="separator separator-solid mt-4 mb-4" />
                                <div className="d-flex align-items-center">
                                    <a href="/" className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
                                        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-2">
                                            <i className="flaticon2-chat-1" />
                                        </span>
                                        24
                                    </a>
                                    <a href="/" className="btn btn-sm btn-text-dark-50 btn-hover-icon-danger btn-hover-text-danger bg-hover-light-danger font-weight-bolder rounded font-size-sm p-2">
                                        <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
                                            <i className="fas fa-heart" />
                                        </span>
                                        75
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div
                          className="card card-custom bgi-no-repeat bgi-size-cover gutter-b card-stretch"
                        >
                            <Timeline
                              dataSource={{
                                  sourceType: 'profile',
                                  screenName: 'TwitterDev'
                              }}
                              options={{
                                  height: '500',
                                  width: '400',
                                  fontSize: '14px',
                                  theme: 'light'
                              }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Feeds;
