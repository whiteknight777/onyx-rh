import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles((theme) => ({
    root: { display: 'flex' },
    icon: {
        fontSize: '20px'
    },
    chip: {
        background: theme.palette.primary.main,
        color: 'white',
        '& svg': {
            fill: 'white'
        }
    },
    warning: {
        background: theme.palette.warning.main,
        color: 'white',
        '& svg': {
            fill: 'white'
        }
    },
    info: {
        background: theme.palette.info.main,
        color: 'white',
        '& svg': {
            fill: 'white'
        }
    },
    success: {
        background: theme.palette.success.main,
        color: 'white',
        '& svg': {
            fill: 'white'
        }
    },
    danger: {
        background: theme.palette.error.main,
        color: 'white',
        '& svg': {
            fill: 'white'
        }
    }

}));

export default Styles;
