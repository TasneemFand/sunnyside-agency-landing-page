import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import useStyles from './Style';
import SideNav from './SideNav/SideNav';
import { useMediaQuery } from '@material-ui/core';

const Header = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');
    let Drawer = null;

    isMobile ? Drawer = (
            <SideNav />
    ) : Drawer = null;

    return (
        <AppBar position='static' className={classes.AppBar}>
            <Toolbar className={classes.Toolbar}>
                <Typography variant='h5' className={classes.Basetitle}>
                    sunnyside
                </Typography>
                <Box display='flex' alignItems='center' position='absolute' right='30px'>
                    <div className={classes.RightButtons}>
                        <div className={classes.Button} >
                            <Typography variant='h6' className={classes.title}>
                                About
                            </Typography>
                        </div>
                        <div className={classes.Button}>
                            <Typography variant='h6' className={classes.title}>
                                Services
                            </Typography>
                        </div>
                        <div className={classes.Button}>
                            <Typography variant='h6' className={classes.title}>
                                Projects
                            </Typography>
                        </div>
                        <div className={classes.ContactButton}>
                            <Typography variant='h6' className={classes.Contacttitle}>
                                CONTACT
                            </Typography>
                        </div>
                    </div>
                    {Drawer}
                </Box>
            </Toolbar>
        </AppBar >
    );
}

export default Header;
