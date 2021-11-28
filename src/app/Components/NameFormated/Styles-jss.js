import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles((theme) => ({
    root: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
    firstLetters: {
        borderRadius: '100%',
        background: theme.palette.primary.main,
        marginRight: '9px',
        minWidth: '35px',
        display: 'flex',
        minHeight: '35px',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    name: {

    }

}));

export default Styles;
