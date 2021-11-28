/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl, checkIsActive } from '../../../../_helpers';

// eslint-disable-next-line
export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => checkIsActive(location, url) ? 'menu-item-active' : '';

    return (
        <div
          id="kt_header_menu"
          className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
          {...layoutProps.headerMenuAttributes}
        >
            {/* begin::Header Nav */}
            <ul className={`menu-nav ${layoutProps.ulClasses}`}>
                {/* begin::1 Level */}
                <Typography className="" variant="h6" noWrap>
                    Material-UI
                </Typography>
                <div className="">
                    <div className="">
                        <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                          root: '',
                          input: ''
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

            </ul>
            {/* end::Header Nav */}
        </div>
    );
}
