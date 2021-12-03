
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    insideTransform: {
        width: '400px',
        margin: '0 auto',
        height: '737.6px',
        [theme.breakpoints.down('sm')]: {width: '100%' , height: '600px',},


    },
    divInside: {
        position: 'relative', top: '25%', 
        [theme.breakpoints.down('sm')]: {textAlign: 'center'},
    },
    BaseTitle: {
        fontSize: '40px', fontFamily: 'Fraunces', color: '#242F3F',
        fontWeight: '900',
        [theme.breakpoints.down('sm')]: {fontSize: '40px',},


    },
    imageTransform: {
        height: '100%'

    },
    containerDiv: {

        height: '737.6px'

    },
    insideImage: {
        textAlign: 'center',
        position: 'relative',
        bottom: '40%'
    },
    titleInsideGraphic: {
        color: '#22554A', fontFamily: 'Fraunces', fontWeight: '900', fontSize: '30px'

    },
    pInsideGraphic: {
        color: '#579588', fontFamily: 'Fraunces', fontSize: '18px',
        marginTop: '25px',
        [theme.breakpoints.down('sm')]: {fontSize: '16px', },

    },
    titleInsidePhotography: {
        color: '#104E65', fontFamily: 'Fraunces', fontWeight: '900', fontSize: '30px'

    },
    pInsidePhotography: {
        color: '#106793', fontFamily: 'Fraunces', fontSize: '18px', marginTop: '25px',
        [theme.breakpoints.down('sm')]: {fontSize: '16px', },


    },
    Title: {
        marginTop: '30px', color: '#8E8B94', lineHeight: '1.7'
    },
    buttonTransform: {
        marginTop: '30px', color: '#242F3F', fontWeight: '800', border: 'none',
        '&:hover': { backgroundColor: 'unset' },
    },
    buttonStandOut: {
        marginTop: '30px', color: '#242F3F', fontWeight: '800', border: 'none',
        '&:hover': { backgroundColor: 'unset' },

    },



}));
