import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Basetitle: {
        fontSize: '40px', fontFamily: 'Barlow', fontWeight: '900', color: '#FFFEFA',
        [theme.breakpoints.down('sm')]: {fontSize: '30px'},


    },
    title: {
        fontSize: '18px', fontFamily: 'Barlow' , fontWeight: 'unset' , color: '#FFFEFA',
        '&:hover': { fontWeight: 'bold', borderBottom: 'solid 2px'},

    },
    Contacttitle: {
        color: '#363A47',fontSize: '18px', fontFamily: 'Barlow' , fontWeight: 'bold' ,
        borderRadius: '30px' ,padding: '10px 25px',
        cursor: 'pointer' , backgroundColor: '#FFFEFA',
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) , color: '#FFFEFA'},
    },
    RightButtons: {
        display: 'flex', alignItems: 'center', 
        [theme.breakpoints.down('sm')]: {display: 'none'},
        [theme.breakpoints.only('md')]: {display: 'flex'},


    },
    Button: {
        height: '100%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '40px',

    },
    ContactButton: {
        marginLeft: '40px'
    },
    toolbar: {
        display: 'flex', justifyContent: 'space-between', 
    },
    AppBar: {
        background: 'unset' , padding: '30px', color: '#FFFEFA', boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {padding: '15px'},
        [theme.breakpoints.only('md')]: {padding: '25px'},


    }
}));
