/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useLayoutEffect, useEffect } from 'react';
import objectPath from 'object-path';
import { useLocation } from 'react-router-dom';
import { QuickActions } from './components/QuickActions';
import { BreadCrumbs } from './components/BreadCrumbs';
import { getBreadcrumbsAndTitle, useSubheader } from '../../_core/MetronicSubheader';
import { useHtmlClassService } from '../../_core/MetronicLayout';

// eslint-disable-next-line
export function SubHeader() {
    const uiService = useHtmlClassService();
    const location = useLocation();
    const subheader = useSubheader();

    const layoutProps = useMemo(() => ({
        config: uiService.config,
        subheaderMobileToggle: objectPath.get(
            uiService.config,
            'subheader.mobile-toggle'
        ),
        subheaderCssClasses: uiService.getClasses('subheader', true),
        subheaderContainerCssClasses: uiService.getClasses(
            'subheader_container',
            true
        )
    }), [uiService]);

    useLayoutEffect(() => {
        const aside = getBreadcrumbsAndTitle('kt_aside_menu', location.pathname);
        const header = getBreadcrumbsAndTitle('kt_header_menu', location.pathname);
        const breadcrumbs = (aside && aside.breadcrumbs.length > 0) ? aside.breadcrumbs : header.breadcrumbs;
        subheader.setBreadcrumbs(breadcrumbs);
        subheader.setTitle((aside && aside.title && aside.title.length > 0) ? aside.title : header.title);
    // eslint-disable-next-line
  }, [location.pathname]);

    // Do not remove this useEffect, need from update title/breadcrumbs outside (from the page)
    useEffect(() => {}, [subheader]);

    return (
        <div
          id="kt_subheader"
          className={`subheader py-2 py-lg-4   ${layoutProps.subheaderCssClasses}`}
        >
            <div
              className={`${layoutProps.subheaderContainerCssClasses} d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap`}
            >
                {/* Info */}
                <div className="d-flex align-items-center flex-wrap mr-1">
                    {layoutProps.subheaderMobileToggle && (
                    <button
                      type="button"
                      className="burger-icon burger-icon-left mr-4 d-inline-block d-lg-none"
                      id="kt_subheader_mobile_toggle"
                    >
                        <span />
                    </button>
                    )}

                    <BreadCrumbs items={subheader.breadcrumbs} />
                </div>

                {/* Toolbar */}
                <div className="d-flex align-items-center">

                    <div className="d-flex align-items-center flex-wrap">

                        <a href="#" className="btn btn-light font-weight-bolder btn-sm">Actions</a>
                        <a href="#" className="btn btn-bg-white font-weight-bold mr-3 my-2 my-lg-0" id="kt_dashboard_daterangepicker" data-toggle="tooltip" title="Select dashboard daterange" data-placement="left">
                            <span className="text-muted font-weight-bold mr-2" id="kt_dashboard_daterangepicker_title">Today</span>
                            <span className="text-primary font-weight-bolder" id="kt_dashboard_daterangepicker_date">Aug 16</span>
                        </a>

                    </div>
                    {/* <QuickActions /> */}
                </div>
            </div>
        </div>
    );
}
