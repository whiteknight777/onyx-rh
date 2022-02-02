import React from 'react';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../../../../_metronic/_helpers';

const Settings = (props) => {
    const { entity } = props;
    return (
        <>

            <form className="form">
                <div className="row">
                    <div className="col-xl-12 px-10 pr-15">
                        <h3 className="font-size-h6 mb-5">Setup Email Notification:</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 px-10 pr-15">
                        <div className="form-group row">
                            <span className="col-xl-3 col-lg-3 col-form-label text-left">Email Notification</span>
                            <div className="col-lg-9 col-xl-6">
                                <span className="switch">
                                    <input type="checkbox" checked="checked" name="email_notification_1" />
                                    <span />
                                </span>
                            </div>
                        </div>
                        <div className="form-group row mb-0">
                            <span className="col-xl-3 col-lg-3 col-form-label text-left">Send Copy To Personal Email</span>
                            <div className="col-lg-9 col-xl-6">
                                <span className="switch">
                                    <input type="checkbox" name="email_notification_2" />
                                    <span />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="separator separator-dashed my-10" />

                <div className="row">
                    <div className="col-xl-12 px-10 pr-15">
                        <h3 className="font-size-h6 mb-5">Activity Related Emails:</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 px-10 pr-15">
                        <div className="form-group row">
                            <span className="col-xl-3 col-lg-3 col-form-label text-left">When To Email</span>
                            <div className="col-lg-9 col-xl-6">
                                <div className="checkbox-list">
                                    <label htmlFor="1" className="checkbox">
                                        <input id="1" type="checkbox" />
                                        <span />
                                        You have new notifications.
                                    </label>
                                    <label htmlFor="2" className="checkbox">
                                        <input id="2" type="checkbox" />
                                        <span />
                                        You re sent a direct message
                                    </label>
                                    <label htmlFor="3" className="checkbox">
                                        <input id="3" type="checkbox" checked="checked" />
                                        <span />
                                        Someone adds you as a connection
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row mb-0">
                            <span className="col-xl-3 col-lg-3 col-form-label text-left">When To Escalate Emails</span>
                            <div className="col-lg-9 col-xl-6">
                                <div className="checkbox-list">
                                    <label htmlFor="4" className="checkbox">
                                        <input id="4" type="checkbox" />
                                        <span />
                                        Upon new order.
                                    </label>
                                    <label htmlFor="5" className="checkbox">
                                        <input id="5" type="checkbox" />
                                        <span />
                                        New membership approval
                                    </label>
                                    <label htmlFor="6" className="checkbox">
                                        <input id="6" type="checkbox" checked="checked" />
                                        <span />
                                        Member registration
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="separator separator-dashed my-10" />

                <div className="row">
                    <div className="col-xl-12 px-10 pr-15">
                        <h3 className="font-size-h6 mb-5">Updates From Keenthemes:</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 px-10 pr-15">
                        <div className="form-group row">
                            <span className="col-xl-3 col-lg-3 col-form-label text-left">Email You With</span>
                            <div className="col-lg-9 col-xl-6">
                                <div className="checkbox-list">
                                    <label htmlFor="7" className="checkbox">
                                        <input id="7" type="checkbox" />
                                        <span />
                                        News about Metronic product and feature updates
                                    </label>
                                    <label htmlFor="8" className="checkbox">
                                        <input id="8" type="checkbox" />
                                        <span />
                                        Tips on getting more out of Keen
                                    </label>
                                    <label htmlFor="9" className="checkbox">
                                        <input id="9" type="checkbox" checked="checked" />
                                        <span />
                                        Things you missed since you last logged into Keen
                                    </label>
                                    <label htmlFor="10" className="checkbox">
                                        <input id="10" type="checkbox" checked="checked" />
                                        <span />
                                        News about Metronic on partner products and other services
                                    </label>
                                    <label htmlFor="11" className="checkbox">
                                        <input id="11" type="checkbox" checked="checked" />
                                        <span />
                                        Tips on Metronic business products
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="card-footer">
                <div className="row">
                    <div className="col-lg-6" />
                    <div className="col-lg-6 text-lg-right">
                        <a
                          href="/"
                          className="btn btn-light-primary font-weight-bolder mr-2"
                        >
                            Annuler
                        </a>
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary font-weight-bolder">
                                <i className="ki ki-check icon-sm" />
                                Sauvegarder
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Settings;
