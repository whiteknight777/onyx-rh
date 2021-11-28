/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl, checkIsActive } from '../../../../_helpers';
import { Menu } from './menu';

// eslint-disable-next-line
export function AsideMenuList({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url, hasSubmenu = false) => checkIsActive(location, url)
        ? ` ${!hasSubmenu
          && 'menu-item-active'} menu-item-open menu-item-not-hightlighted`
        : '';

    return (
        <>
            {/* begin::Menu Nav */}
            <ul className={`menu-nav ${layoutProps.ulClasses}`}>
                {Menu.map((item, key) => (
                    <React.Fragment key={key}>
                        {item.type === 'menu-section' && (
                        <li
                          key={key}
                          className="menu-section"
                        >
                            <h6 className="menu-text text-md">
                                <span className="menu-ellipsis">{item.title}</span>
                            </h6>
                            <i className="menu-icon flaticon-more-v2" />
                        </li>
                        )}

                        {(item.type === 'menu' && item.submenu.length === 0) && (
                        <li
                          key={key}
                          className={`menu-item ${getMenuItemActive(item.url, false)}`}
                          aria-haspopup="true"
                        >
                            <NavLink
                              key={`nav-${key}`}
                              className="menu-link"
                              to={item.url}
                            >
                                <span className="svg-icon menu-icon">
                                    {item.icon}
                                </span>
                                <span className="menu-text text-md">
                                    <span className="menu-ellipsis">{item.title}</span>
                                </span>
                            </NavLink>
                        </li>
                        )}

                        {(item.type === 'menu' && item.submenu.length > 0) && (
                        <li
                          key={key}
                          className={`menu-item menu-item-submenu ${getMenuItemActive(
                              item.url,
                              true
                          )}`}
                          aria-haspopup="true"
                          data-menu-toggle="hover"
                        >
                            <NavLink key={`nav-${key}`} className="menu-link menu-toggle" to={item.url}>
                                <span className="svg-icon menu-icon">
                                    {item.icon}
                                </span>
                                <span className="menu-text text-md">
                                    <span className="menu-ellipsis">{item.title}</span>
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div key={`div-submenu-${key}`} className="menu-submenu ">
                                <i className="menu-arrow" />
                                <ul className="menu-subnav">
                                    <li className="menu-item  menu-item-parent" aria-haspopup="true">
                                        <span className="menu-link">
                                            <span className="menu-text text-md">
                                                <span className="menu-ellipsis">{item.title}</span>
                                            </span>
                                        </span>
                                    </li>
                                    {item.submenu.map((subItem, k) => (
                                        <li
                                          key={k}
                                          className={`menu-item menu-item-submenu ${getMenuItemActive(
                                              subItem.url,
                                              true
                                          )}`}
                                          aria-haspopup="true"
                                          data-menu-toggle="hover"
                                        >
                                            <NavLink
                                              key={`subItem-${k}`}
                                              className="menu-link menu-toggle"
                                              to={subItem.url}
                                            >
                                                <i className="menu-bullet menu-bullet-dot">
                                                    <span />
                                                </i>
                                                <span className="menu-text text-md">
                                                    <span className="menu-ellipsis">{subItem.title}</span>
                                                </span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        )}
                    </React.Fragment>
                ))}
            </ul>

        </>
    );
}
