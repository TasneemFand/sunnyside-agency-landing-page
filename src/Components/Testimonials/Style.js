import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    container: {
        padding: '60px',
        [theme.breakpoints.down('sm')]: { padding: '0px' },

    },
    Title: {
        textAlign: 'center', padding: '40px',
        [theme.breakpoints.down('sm')]: { marginTop: '50px' },

    },

    baseTitle: {
        color: '#A7A8AA', fontSize: '30px', fontWeight: '900', fontFamily: 'Barlow', letterSpacing: '10px',
        [theme.breakpoints.down('sm')]: { fontSize: '17px', letterSpacing: '3px', fontWeight: '900', },
        [theme.breakpoints.only('md')]: { fontSize: '28px', letterSpacing: '3px', fontWeight: '900', },



    },
    testimonials: {
        display: 'flex', padding: '40px', marginTop: '20px',
        [theme.breakpoints.down('sm')]: { display: 'block', padding: '0px' },
        [theme.breakpoints.only('md')]: { padding: '0px',  },

    },

    box: {
        marginRight: '40px', width: '100%' ,

        [theme.breakpoints.down('md')]: { marginRight: '10px'},
    },

    Image: {
    borderRadius: '50%', width: '100px', margin: '0 auto', display: 'block',
},

    PTitle: {
    fontFamily: 'Fraunces', fontSize: '18px',
    marginTop: '30px', color: '#8E8B94', lineHeight: '1.7',
    textAlign: 'center', fontWeight: '400',
    [theme.breakpoints.down('sm')]: { fontSize: '16px', padding: '0px' },
    [theme.breakpoints.only('md')]: { padding: '0px', fontSize: '16px', },


},

    divBottom: {
    textAlign: 'center', marginTop: '60px',
    [theme.breakpoints.down('sm')]: { marginTop: '50px', marginBottom: '60px' },

},

    Name: {
    color: '#252930', fontWeight: '900'
},

    work: {
    color: '#A7A8AA', marginTop: '12px', fontSize: '14px'

},

}));
