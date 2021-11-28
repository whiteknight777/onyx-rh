import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '400px'
    },
    researchInput: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center'
    },
    input: {
        margin: '0 9px'
    },
    columnsList: {
        minWidth: '200px'
    },
    drawerBox: {
        display: 'flex',
        flexFlow: 'row',
        width: '100%'
    },
    drawerTitle: {
        flexGrow: 1,
        minWidth: '200px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '4px'
    },
    drawerContent: {
        flexGrow: 1
    },
    columnsBox: {
        display: 'flex',
        flexFlow: 'column',
        padding: '10px 16px 13px'
    },
    svgIcon: {
        width: '1.7rem !important',
        height: 'auto !important',
        cursor: 'pointer',
        '& g': {
            '& [fill]': {
                fill: '#3f4254 !important'
            }
        }
    }
});

export default Styles;
