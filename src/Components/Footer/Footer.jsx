import React from 'react';
import { Typography, Box } from '@material-ui/core';
import useStyles from './Style';
import FacebookIcon from '../../Assets/Images for sunnyside-agency/icon-facebook.svg';
import instagramiIcon from '../../Assets/Images for sunnyside-agency/icon-instagram.svg';
import pinterestIcon from '../../Assets/Images for sunnyside-agency/icon-pinterest.svg';
import twitterIcon from '../../Assets/Images for sunnyside-agency/icon-twitter.svg';
import { useMediaQuery } from '@material-ui/core';

const Footer = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');


    return (
        <div style={{ backgroundColor: '#90D4C5' }}>
            <div style={{ padding: '40px' }}>
                <Typography variant="h5" className={classes.Title}>
                    sunnyside
                </Typography>
                <Box style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', margin: 'auto' }}>
                        <div className={classes.div} style={{ marginLeft: '0' }}  >
                            <Typography variant='h6' className={classes.title}>
                                About
                            </Typography>
                        </div>
                        <div className={classes.div} >
                            <Typography variant='h6' className={classes.title}>
                                Services
                            </Typography>
                        </div>
                        <div className={classes.div} >
                            <Typography variant='h6' className={classes.title}>
                                Projects
                            </Typography>
                        </div>

                    </div>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', margin: 'auto' }}>
                        <div className={classes.icons} style={{ marginLeft: '0' }} >
                            <img src={FacebookIcon} className={classes.icon} />

                        </div>
                        <div className={classes.icons} >
                            <img src={instagramiIcon} className={classes.icon} />

                        </div>
                        <div className={classes.icons} >
                            <img src={twitterIcon} className={classes.icon} />

                        </div>
                        <div className={classes.icons} >
                            <img src={pinterestIcon} className={classes.icon}/>

                        </div>

                    </div>
                </Box>
            </div>
        </div>

    );
}

export default Footer;