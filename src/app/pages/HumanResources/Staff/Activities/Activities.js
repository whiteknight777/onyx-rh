import React from 'react';
import { toAbsoluteUrl } from '../../../../../_metronic/_helpers';

const Activities = (props) => {
    const { entity } = props;
    return (
        <div className="px-10 py-10 my-5" style={{ maxWidth: '650px' }}>
            {/* <div className="container separator separator-dashed my-10" /> */}
            <div className="timeline timeline-3">
                <div className="timeline-items">
                    <div className="timeline-item">
                        <div className="timeline-media">
                            <img alt="Pic" src={toAbsoluteUrl('/media/users/300_25.jpg')} />
                        </div>
                        <div className="timeline-content">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="mr-2">
                                    <a href="/" className="text-dark-75 text-hover-primary font-weight-bold">New order has been placed</a>
                                    <span className="text-muted ml-2">Today</span>
                                    <span className="label label-light-success font-weight-bolder label-inline ml-2">new</span>
                                </div>
                            </div>
                            <p className="p-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-media">
                            <i className="flaticon2-shield text-danger" />
                        </div>
                        <div className="timeline-content">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="mr-2">
                                    <a href="/" className="text-dark-75 text-hover-primary font-weight-bold">Member has sent a request.</a>
                                    <span className="text-muted ml-2">8:30PM 20 June</span>
                                    <span className="label label-light-danger font-weight-bolder label-inline ml-2">pending</span>
                                </div>
                            </div>
                            <p className="p-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-media">
                            <i className="flaticon2-layers text-warning" />
                        </div>
                        <div className="timeline-content">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="mr-2">
                                    <a href="/" className="text-dark-75 text-hover-primary font-weight-bold">System deployment has been completed.</a>
                                    <span className="text-muted ml-2">11:00AM 30 June</span>
                                    <span className="label label-light-warning font-weight-bolder label-inline ml-2">done</span>
                                </div>
                            </div>
                            <p className="p-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-media">
                            <i className="flaticon2-notification fl text-primary" />
                        </div>
                        <div className="timeline-content">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="mr-2">
                                    <a href="/" className="text-dark-75 text-hover-primary font-weight-bold">Database backup has been completed.</a>
                                    <span className="text-muted ml-2">2 months ago</span>
                                    <span className="label label-light-primary font-weight-bolder label-inline ml-2">delivered</span>
                                </div>
                            </div>
                            <p className="p-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;
