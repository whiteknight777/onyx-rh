import React from 'react';
// import SVG from 'react-inlinesvg';
import { Grid } from '@material-ui/core';
import { ActivitiesWidget } from '../../Components/ActivitiesWidget';
import { toAbsoluteUrl } from '../../../_metronic/_helpers';
// import { ListsWidget11 } from '../../../_metronic/_partials/widgets/lists/ListsWidget11';
import { StatsWidget11 } from '../../../_metronic/_partials/widgets/stats/StatsWidget11';
import { StatsWidget12 } from '../../../_metronic/_partials/widgets/stats/StatsWidget12';

function Overviews() {
    return (
        <>
            {/* begin::Dashboard */}
            {/* begin::Row */}
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    {/* <StatsWidget12 baseColor="primary" /> */}
                    <ActivitiesWidget
                      className="card-stretch"
                      title="Actualités"
                      subtitle=""
                    />
                </Grid>
                <Grid item xs={7}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <div
                                      className="card card-custom bgi-no-repeat bgi-size-cover mb-3"
                                      style={{
                                          height: '150px',
                                          backgroundImage: `url("${toAbsoluteUrl('/media/stock-600x400/img-44.jpg')}")`
                                      }}
                                    >
                                        <div className="card-body d-flex flex-column">
                                            <a href="/" className="text-white text-hover-primary font-weight-bolder font-size-h3">
                                                Equipes
                                            </a>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={9}>
                                    <div className="card card-custom mb-3" style={{ height: '150px' }}>
                                        <div className="card-body d-flex align-items-center justify-content-between flex-wrap">
                                            <div className="mr-2 d-flex">
                                                <div>
                                                    <h3 className="font-weight-bolder">Collaborateurs</h3>
                                                    <div className="text-dark-50 font-size-lg mt-1">Consultez la liste des collaborateurs</div>
                                                </div>
                                            </div>
                                            <a href="/" className="btn btn-primary font-weight-bold py-2 px-6">Accéder</a>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <div className="card card-custom bg-primary mb-3" style={{ height: '150px' }}>
                                                <div className="card-body px-6 d-flex align-items-center flex-column">
                                                    <a href="/" className="text-inverse-success font-weight-bolder font-size-h3 mt-3">
                                                        Documents
                                                        <br />
                                                        partagés
                                                    </a>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div
                                              className="card card-custom bgi-no-repeat bgi-size-cover mb-3"
                                              style={{
                                                  height: '150px'
                                              }}
                                            >
                                                <StatsWidget11 baseColor="primary" className="card-stretch" />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <div
                                              className="card card-custom bgi-no-repeat bgi-size-cover"
                                              style={{
                                                  backgroundImage: `url("${toAbsoluteUrl('/media/stock-600x400/img-4.jpg')}")`
                                              }}
                                            >
                                                <div className="card-body d-flex align-items-center">
                                                    <div>
                                                        <h3 className="text-white font-weight-bolder line-height-lg mb-5">
                                                            Consultez le calendrier
                                                            <br />
                                                            des absences
                                                        </h3>
                                                        <a href="/" className="btn btn-success font-weight-bold px-6 py-3">Consulter</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <div
                                      className="card card-custom bg-warning bgi-no-repeat bgi-size-cover mb-3 card-stretch"
                                      style={{
                                          //   backgroundImage: `url("${toAbsoluteUrl('/media/svg/illustrations/login-visual-5.svg')}")`
                                          backgroundImage: `url("${toAbsoluteUrl('/media/svg/patterns/aare.svg')}")`
                                      }}
                                    >
                                        <div className="card-body d-flex flex-column align-items-start justify-content-start">
                                            <div className="p-1 flex-grow-1">
                                                <a href="/" className="text-white font-weight-bolder text-lg text-hover-primary line-height-lg mb-5">
                                                    Consulter le rapport
                                                    <br />
                                                    des équipes
                                                </a>
                                            </div>
                                            {/* <a href="/" className="btn btn-link btn-link-white font-weight-bold pt-2">
                                                Consulter le rapport des équipes
                                                <span className="svg-icon svg-icon-lg svg-icon-warning">
                                                </span>
                                            </a> */}
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* end::Row */}

            {/* begin::Row */}
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className="card card-custom gutter-b card-stretch mt-3">
                        <div className="card-body d-flex p-0">
                            <div
                              className="flex-grow-1 bg-primary p-8 card-rounded bgi-no-repeat d-flex align-items-center"
                              style={{
                                  backgroundSize: 'auto 90%',
                                  backgroundPositionX: 'right',
                                  backgroundPositionY: 'bottom',
                                  backgroundImage: `url("${toAbsoluteUrl('/media/svg/humans/custom-10.svg')}")`
                              }}
                            >
                                <div className="row">
                                    <div className="col-xl-8">
                                        <h2 className="text-white font-weight-bolder">
                                            Consultez le niveau de bien-être de vos équipes
                                        </h2>
                                        <p className="text-white my-5 font-size-xl font-weight-bold">
                                            Grâce à des questionnaires personnalisés, découvrez l&apos;état de vos équipes
                                        </p>
                                        <a href="/" className="btn btn-success font-weight-bold py-2 px-6">Accéder</a>
                                    </div>
                                    <div className="col-xl-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <StatsWidget12 baseColor="primary" className="gutter-b card-stretch mt-3" />
                </Grid>
            </Grid>
            {/* end::Row */}
            {/* end::Dashboard */}
        </>
    );
}

export default Overviews;
