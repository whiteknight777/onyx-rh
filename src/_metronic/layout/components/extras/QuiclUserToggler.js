/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useContext } from 'react';
import SVG from 'react-inlinesvg';
import objectPath from 'object-path';
import { IconButton } from '@material-ui/core';
import { UserContext } from '../../../../app/modules/Auth/contexts/userProvider';
import { useHtmlClassService } from '../../_core/MetronicLayout';
import { UserProfileDropdown } from './dropdowns/UserProfileDropdown';
import { toAbsoluteUrl } from '../../../_helpers';

// eslint-disable-next-line
export function QuickUserToggler(props) {

    const { classes } = props;
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => ({
        offcanvas:
        objectPath.get(uiService.config, 'extras.user.layout') === 'offcanvas'
    }), [uiService]);

    return (
        <>
            {layoutProps.offcanvas && (
            <div className="topbar-item">
                <div
                  className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg"
                  id="kt_quick_user_toggle"
                >
                    <>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <span className="text-md svg-icon">
                                <SVG
                                  className={classes.svgIcon}
                                  src={toAbsoluteUrl('/media/svg/icons/Text/Toggle-Left.svg')}
                                />
                            </span>
                        </IconButton>
                    </>
                </div>
            </div>
            )}

            {!layoutProps.offcanvas && <UserProfileDropdown />}
        </>
    );
}
