import { IconButton, Tooltip } from '@material-ui/core';
import React from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import SVG from 'react-inlinesvg';
import { makeStyles } from '@material-ui/core/styles';
import { toAbsoluteUrl } from '../../../_metronic/_helpers';

const Styles = makeStyles(() => ({
    svgIcon: {
        width: '1.9rem !important',
        height: 'auto !important',
        cursor: 'pointer',
        '& g': {
            '& [fill]': {
                fill: '#3f4254 !important'
            }
        }
    }
}));

function BtnActions(props) {
    const {
        type, label, handleClick, icon
    } = props;

    const classes = Styles();

    const [state, setState] = React.useState({
        defaultIcon: icon
    });

    React.useEffect(() => {
        switch (type) {
            case 'show':
                setState(prev => ({
                    ...prev,
                    defaultIcon: (
                        <span className="text-md svg-icon">
                            <SVG
                              className={classes.svgIcon}
                              src={toAbsoluteUrl('/media/svg/icons/Design/Substract.svg')}
                            />
                        </span>
                    )
                }));
                break;
            case 'edit':
                setState(prev => ({
                    ...prev,
                    defaultIcon: (<BiEdit className="text-md" />)
                }));
                break;
            case 'remove':
                setState(prev => ({
                    ...prev,
                    defaultIcon: (<BiTrash className="text-md" />)
                }));
                break;
            default:
                break;
        }
    }, [classes.svgIcon, type]);

    return (
        <Tooltip title={label}>
            <IconButton
              aria-label={label}
              onClick={() => {
                  handleClick();
              }}
            >
                {(icon !== null && icon !== undefined) ? icon : state.defaultIcon}
            </IconButton>
        </Tooltip>
    );
}

export default BtnActions;
