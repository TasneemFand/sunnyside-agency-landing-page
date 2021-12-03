import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Title: {
        textAlign: 'center', color: '#317868', fontWeight: '900', fontFamily: 'Fraunces', fontSize: '40px', marginTop: '20px'
    },

    div: {
        marginLeft: '50px', marginTop: '30px', color: '#448B7B', fontWeight: '600',
        cursor: 'pointer', '&:hover': { color: '#FFFEFA' },
        [theme.breakpoints.down('sm')]: { marginLeft: '35px', marginTop: '50px', },

    },

    icons: {
        marginTop: '70px', marginLeft: '40px',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: { marginBottom: '50px' },


    },

    icon: {
        '&:hover': {
            filter: 'brightness(10)',
        },

    },


}));
