/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import { DropdownCustomToggler, DropdownMenu1 } from '../../_metronic/_partials/dropdowns';
import { toAbsoluteUrl } from '../../_metronic/_helpers';

// eslint-disable-next-line
export function ActivitiesWidget({ className, title="My Activity", subtitle="890,344 Sales" }) {
    return (
        <>
            <div className={`card card-custom  ${className}`}>
                {/* Header */}
                <div className="card-header align-items-center border-0 mt-4">
                    <h3 className="card-title align-items-start flex-column">
                        <span className="font-weight-bolder text-dark">{title}</span>
                        <span className="text-muted mt-3 font-weight-bold font-size-sm">
                            {subtitle}
                        </span>
                    </h3>
                    <div className="card-toolbar">
                        <Dropdown className="dropdown-inline" alignRight>
                            <Dropdown.Toggle
                              id="dropdown-toggle-top"
                              as={DropdownCustomToggler}
                            >
                                <i className="ki ki-bold-more-hor" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdowns-menu-Right">
                                <DropdownMenu1 />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                {/* Body */}
                <div className="card-body pt-2">

                    <div className="d-flex flex-wrap align-items-center mb-10">

                        <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                            <div
                              className="symbol-label"
                              style={{
                                  height: '60px',
                                  backgroundImage: `url("${toAbsoluteUrl('/media/stock-600x400/img-1.jpg')}")`
                              }}
                            />
                        </div>

                        <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 mr-2">
                            <a href="#" className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">Cup &amp; Green</a>
                            <span className="text-muted font-weight-bold">Visually stunning</span>
                        </div>

                        <div className="d-flex align-items-center mt-lg-0 mt-3">

                            <div className="mr-6">
                                <i className="fa fa-star-half-alt mr-1 text-warning font-size-lg" />
                                <span className="text-dark-75 font-weight-bolder">4.2</span>
                            </div>

                            <a href="#" className="btn btn-icon btn-sm">
                                <span className="svg-icon svg-icon-success">
                                    <span className="svg-icon svg-icon-md">

                                        <SVG
                                          className="h-50 align-self-center"
                                          src={toAbsoluteUrl('/media/svg/icons/Code/Right-circle.svg')}
                                        />

                                    </span>
                                </span>
                            </a>

                        </div>

                    </div>

                    <div className="d-flex flex-wrap align-items-center mb-10">

                        <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                            <div
                              className="symbol-label"
                              style={{
                                  height: '60px',
                                  backgroundImage: `url("${toAbsoluteUrl('/media/stock-600x400/img-2.jpg')}")`
                              }}
                            />
                        </div>

                        <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 mr-2">
                            <a href="#" className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">Pink Patterns</a>
                            <span className="text-muted font-weight-bold">Feminine all around</span>
                        </div>

                        <div className="d-flex align-items-center mt-lg-0 mt-3">

                            <div className="mr-6">
                                <i className="fa fa-star mr-1 text-warning font-size-lg" />
                                <span className="text-dark-75 font-weight-bolder">5.0</span>
                            </div>

                            <a href="#" className="btn btn-icon btn-sm">
                                <span className="svg-icon svg-icon-success">
                                    <span className="svg-icon svg-icon-md">

                                        <SVG
                                          className="h-50 align-self-center"
                                          src={toAbsoluteUrl('/media/svg/icons/Code/Right-circle.svg')}
                                        />

                                    </span>
                                </span>
                            </a>

                        </div>

                    </div>

                    <div className="d-flex flex-wrap align-items-center mb-10">

                        <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                            <div
                              className="symbol-label"
                              style={{
                                  height: '60px',
                                  backgroundImage: `url("${toAbsoluteUrl('/media/stock-600x400/img-3.jpg')}")`
                              }}
                            />
                        </div>

                        <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 mr-2">
                            <a href="#" className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">Abstract Art</a>
                            <span className="text-muted font-weight-bold">The will to capture readers</span>
                        </div>

                        <div className="d-flex align-items-center mt-lg-0 mt-3">

                            <div className="mr-6">
                                <i className="fa fa-star-half-alt mr-1 text-warning font-size-lg" />
                                <span className="text-dark-75 font-weight-bolder">5.7</span>
                            </div>

                            <a href="#" className="btn btn-icon btn-sm">
                                <span className="svg-icon svg-icon-success">
                                    <span className="svg-icon svg-icon-md">

                                        <SVG
                                          className="h-50 align-self-center"
                                          src={toAbsoluteUrl('/media/svg/icons/Code/Right-circle.svg')}
                                        />

                                    </span>
                                </span>
                            </a>

                        </div>

                    </div>

                    <div className="d-flex flex-wrap align-items-center mb-1">

                        <div className="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
                            <div
                              className="symbol-label"
                              style={{
                                  height: '60px',
                                  backgroundImage: `url("${toAbsoluteUrl('/media/stock-600x400/img-4.jpg')}")`
                              }}
                            />
                        </div>

                        <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 mr-2">
                            <a href="#" className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">Desserts platter</a>
                            <span className="text-muted font-weight-bold">Food trends &amp; inspirations</span>
                        </div>

                        <div className="d-flex align-items-center mt-lg-0 mt-3">

                            <div className="mr-6">
                                <i className="fa fa-star mr-1 text-warning font-size-lg" />
                                <span className="text-dark-75 font-weight-bolder">3.7</span>
                            </div>

                            <a href="#" className="btn btn-icon btn-sm">
                                <span className="svg-icon svg-icon-success">
                                    <span className="svg-icon svg-icon-md">

                                        <SVG
                                          className="h-50 align-self-center"
                                          src={toAbsoluteUrl('/media/svg/icons/Code/Right-circle.svg')}
                                        />

                                    </span>
                                </span>
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
