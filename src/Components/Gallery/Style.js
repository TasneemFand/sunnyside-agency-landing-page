import {makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Gallery: {
        [theme.breakpoints.down('sm')]: {display: 'flex'},

    },

    Image: {
        width: '379.8px', height: '100%',
        [theme.breakpoints.down('sm')]: {width: '170.5px'},

        [theme.breakpoints.only('md')]: {width: '263.6px'},


    }

}));
