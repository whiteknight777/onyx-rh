import React, { useMemo, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import objectPath from 'object-path';
import SVG from 'react-inlinesvg';
import { UserContext } from '../../../../app/modules/Auth/contexts/userProvider';
import { useHtmlClassService } from '../../_core/MetronicLayout';
import { toAbsoluteUrl } from '../../../_helpers';
import NameFormated from '../../../../app/Components/NameFormated/NameFormated';

// eslint-disable-next-line
export function Brand() {
    const uiService = useHtmlClassService();
    const { userStore } = useContext(UserContext);
    const { user } = userStore;
    const [open, toogleMenu] = useState(true);

    const layoutProps = useMemo(() => ({
        brandClasses: uiService.getClasses('brand', true),
        asideSelfMinimizeToggle: objectPath.get(
            uiService.config,
            'aside.self.minimize.toggle'
        ),
        headerLogo: uiService.getLogo(),
        headerStickyLogo: uiService.getStickyLogo()
    }), [uiService]);

    return (
        <>
            {/* begin::Brand */}
            <div
              className={`brand flex-column-auto ${layoutProps.brandClasses}`}
              id="kt_brand"
            >
                {/* begin::Logo */}
                <Link to="/" className="brand-logo">
                    <img alt="logo" className="header-logo" src={layoutProps.headerLogo} />
                    <span className="app-name">
                        Onyx
                    </span>
                </Link>
                {/* end::Logo */}

                {layoutProps.asideSelfMinimizeToggle && (
                    <>
                        {/* begin::Toggle */}
                        <button
                          type="button"
                          className="brand-toggle btn btn-sm px-0"
                          id="kt_aside_toggle"
                          onClick={() => {
                              toogleMenu(!open);
                          }}
                        >
                            <span className="svg-icon svg-icon-xl">
                                <SVG src={toAbsoluteUrl('/media/svg/icons/Navigation/Angle-double-left.svg')} />
                            </span>
                        </button>
                        {/* end::Toolbar */}
                    </>
                )}
            </div>
            {/* end::Brand */}

            {/* begin::User */}
            { open === true
                ? (
                    <div className="text-center">
                        <div className="symbol symbol-60 symbol-circle symbol-xl-90">
                            <div
                              className="symbol-label"
                              style={{ backgroundImage: `url(${user && user.pic})` }}
                            />
                            <i className="symbol-badge symbol-badge-bottom bg-success" />
                        </div>
                        <h4 className="font-weight-bold my-2">
                            Hi,
                            {' '}
                            {' '}
                            {user?.fullname}
                        </h4>
                        <div className="text-muted mb-2">{user?.companyName}</div>
                    </div>
                ) : (
                    <div className="text-center mt-2">
                        <span className="userAvatar">
                            <NameFormated name={user?.fullname} noMargin />
                        </span>
                    </div>
                )}
            {/* end::User  */}
        </>
    );
}
