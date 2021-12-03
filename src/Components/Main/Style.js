import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Basetitle: {
        fontSize: '50px', fontFamily: 'Fraunces', letterSpacing: '10px', color: '#FFFEFA',
        fontWeight: 'bold', textAlign: 'center', marginTop: '70px',
        [theme.breakpoints.down('sm')]: { fontSize: '30px' },
        [theme.breakpoints.only('md')]: {
            fontSize: '40px',
            marginTop: '90px',
        },



    },

    arrowDownIcon: {
        textAlign: 'center', marginTop: '100px',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px', "& :nth-child(1)": {
                height: "65px"
            }
        },
        [theme.breakpoints.only('md')]: {
            marginTop: '100px', "& :nth-child(1)": {
                height: "100px"
            }
        },

    },

    cover: {

        backgroundImage: 'url(' + require('../../Assets/Images for sunnyside-agency/desktop/image-header.jpg') + ')',
        backgroundSize: 'cover', backgroundPosition: 'center',
        height: '830px',
    },

    coverMobile: {

        backgroundImage: 'url(' + require('../../Assets/Images for sunnyside-agency/mobile/image-header-mobile.jpg') + ')',
        backgroundSize: 'cover', backgroundPosition: 'center',
        height: '480px',

    }





}));
