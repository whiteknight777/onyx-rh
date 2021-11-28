import React, { useMemo, useContext } from 'react';
import objectPath from 'object-path';
import SVG from 'react-inlinesvg';
import {
    fade, makeStyles, Toolbar,
    IconButton
} from '@material-ui/core';
import { UserContext } from '../../../../app/modules/Auth/contexts/userProvider';
import { QuickUserToggler } from '../extras/QuiclUserToggler';
import { useHtmlClassService } from '../../_core/MetronicLayout';
import { toAbsoluteUrl } from '../../../_helpers';
import DrawerBox from '../../../../app/Components/Drawer/DrawerBox';
import Activities from '../../../../app/pages/HumanResources/Staff/Activities/Activities';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: '.9rem'
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit'
    },
    uidCompany: {
        fontSize: '13px'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    svgIcon: {
        width: '2rem !important',
        height: 'auto !important',
        '& g': {
            '& [fill]': {
                fill: 'white !important'
            }
        }
    }
}));

// eslint-disable-next-line
export function Topbar() {
    const classes = useStyles();
    const { userStore } = useContext(UserContext);
    const { user } = userStore;
    const [state, setState] = React.useState({
        openNotifications: false
    });

    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => ({
        viewSearchDisplay: objectPath.get(
            uiService.config,
            'extras.search.display'
        ),
        viewNotificationsDisplay: objectPath.get(
            uiService.config,
            'extras.notifications.display'
        ),
        viewQuickActionsDisplay: objectPath.get(
            uiService.config,
            'extras.quick-actions.display'
        ),
        viewCartDisplay: objectPath.get(uiService.config, 'extras.cart.display'),
        viewQuickPanelDisplay: objectPath.get(
            uiService.config,
            'extras.quick-panel.display'
        ),
        viewLanguagesDisplay: objectPath.get(
            uiService.config,
            'extras.languages.display'
        ),
        viewUserDisplay: objectPath.get(uiService.config, 'extras.user.display')
    }), [uiService]);

    return (
        <>
            <div className={`${classes.grow}`}>
                <Toolbar className="topbar" style={{ padding: 0 }}>
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="open drawer"
                    >
                        {/* <span className="text-md svg-icon">
                        <SVG
                          className={classes.svgIcon}
                          src={toAbsoluteUrl('/media/svg/icons/General/Expand-arrows.svg')}
                        />
                    </span> */}
                        <span className="text-md svg-icon">
                            <SVG
                              className={classes.svgIcon}
                              src={toAbsoluteUrl('/media/svg/icons/Design/Position.svg')}
                            />
                        </span>

                    </IconButton>

                    <IconButton
                      edge="start"
                      color="inherit"
                      className={classes.menuButton}
                      aria-label="open drawer"
                    >
                        <span className="text-md svg-icon">
                            <SVG
                              className={classes.svgIcon}
                              src={toAbsoluteUrl('/media/svg/icons/Code/Compiling.svg')}
                            />
                        </span>

                    </IconButton>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="search" color="inherit">
                            <span className="text-md svg-icon">
                                <SVG
                                  className={classes.svgIcon}
                                  src={toAbsoluteUrl('/media/svg/icons/General/Search.svg')}
                                />
                            </span>
                        </IconButton>
                        <IconButton
                          aria-label="show 17 new notifications"
                          color="inherit"
                          onClick={() => {
                              setState(prev => ({
                                  ...prev,
                                  openNotifications: true
                              }));
                          }}
                        >
                            <span className="text-md svg-icon">
                                <SVG
                                  className={classes.svgIcon}
                                  src={toAbsoluteUrl('/media/svg/icons/General/Notification2.svg')}
                                />
                            </span>
                        </IconButton>
                        {layoutProps.viewUserDisplay && <QuickUserToggler classes={classes} />}
                    </div>
                </Toolbar>
            </div>
            <DrawerBox
              anchor="right"
              variant="temporary"
              onClose={() => {
                  setState(prev => ({
                      ...prev,
                      openNotifications: false
                  }));
              }}
              open={state.openNotifications}
            >

                <Activities />
            </DrawerBox>
        </>
    );
}
