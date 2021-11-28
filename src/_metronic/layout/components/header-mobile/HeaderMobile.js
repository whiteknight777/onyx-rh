import React, {useMemo} from "react";
import {Link} from "react-router-dom";
import objectPath from "object-path";
import {CgMenuRound} from 'react-icons/cg'
import { QuickUserToggler } from "../extras/QuiclUserToggler";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";
import {useHtmlClassService} from "../../_core/MetronicLayout";

export function HeaderMobile() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      headerLogo: uiService.getStickyLogo(),
      asideDisplay: objectPath.get(uiService.config, "aside.self.display"),
      headerMenuSelfDisplay:
          objectPath.get(uiService.config, "header.menu.self.display") === true,
      headerMobileCssClasses: uiService.getClasses("header_mobile", true),
      viewUserDisplay: objectPath.get(uiService.config, "extras.user.display"),
      headerMobileAttributes: uiService.getAttributes("header_mobile")
    };
  }, [uiService]);

  return (
      <>
        {/*begin::Header Mobile*/}
        <div
            id="kt_header_mobile"
            className={`header-mobile align-items-center ${layoutProps.headerMobileCssClasses}`}
            {...layoutProps.headerMobileAttributes}
        >
          {/*begin::Logo*/}
          <Link to="/">
            <img alt="logo" className="header-logo" src={layoutProps.headerLogo}/>
            <span className="app-name">
            Venum
          </span>
          </Link>
          {/*end::Logo*/}

          {/*begin::Toolbar*/}
          <div className="d-flex align-items-center">
            {layoutProps.asideDisplay && (
                <>
                  {/*begin::Aside Mobile Toggle*/}
                  <button className="btn p-0 burger-icon burger-icon-left mr-4" id="kt_aside_mobile_toggle">
                    <span/>
                  </button>
                  {/*end::Aside Mobile Toggle*/}
                </>
            )}
            
            {/*begin::Topbar Mobile Toggle*/}
            <button
                className="btn btn-hover-text-primary p-0"
                id="kt_header_mobile_topbar_toggle"
            >
              <span className="svg-icon svg-icon-xl">
                <CgMenuRound className="text-gray-200" />
              </span>
            </button>

            
            {/* {layoutProps.viewUserDisplay && <QuickUserToggler />} */}
            {/*end::Topbar Mobile Toggle*/}
          </div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Header Mobile*/}
      </>
  );
}
