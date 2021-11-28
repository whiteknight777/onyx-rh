import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    formGroup: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& span': {
            minWidth: '30%'
        }
    }
}));

export default Styles;
