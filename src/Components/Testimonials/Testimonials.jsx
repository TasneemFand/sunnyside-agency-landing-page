import React from 'react';
import { Typography, Box } from '@material-ui/core';
import emilyImage from '../../Assets/Images for sunnyside-agency/image-emily.jpg';
import jennieImage from '../../Assets/Images for sunnyside-agency/image-jennie.jpg';
import thomasImage from '../../Assets/Images for sunnyside-agency/image-thomas.jpg';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';

const Testimonials = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');


    return (
        <div  className={classes.container}>
            <div className={classes.Title}>
                {isMobile ? <Typography variant="h5" className={classes.baseTitle}>CLIENT TESTIMONIALS</Typography> :
                <Typography variant="h5" className={classes.baseTitle}>CLIENT TESTIMONIALS</Typography>}

            </div>

            <div className={classes.testimonials}>
                <Box className={classes.box} >
                    <img src={emilyImage} className={classes.Image} />
                    <Typography variant="h6" className={classes.PTitle}>
                        We put our trust in Synnysideand they <br /> delivered, making sure our needs were met <br />
                        and deadlines were always hit.
                    </Typography>
                    <div className={classes.divBottom}>
                        <Typography component="legend" className={classes.Name}>
                            Emily R.
                        </Typography>
                        <Typography variant="subtitle1" className={classes.work}>
                            Marketing Director
                        </Typography>

                    </div>
                </Box>
                <Box className={classes.box} >
                    <img src={thomasImage} className={classes.Image} />
                    <Typography variant="h6" className={classes.PTitle}>
                        Sunnyside's enthusiasm coupled with their <br />
                        keen interest in our brand's success made it<br />
                        a satisfying and enjoyable experience.
                    </Typography>
                    <div className={classes.divBottom}>
                        <Typography component="legend" className={classes.Name}>
                            Thomas S.
                        </Typography>
                        <Typography variant="subtitle1" className={classes.work}>
                            Chief Operating Officer
                        </Typography>

                    </div>
                </Box>
                <Box style={{width: '100%' }}>
                    <img src={jennieImage} className={classes.Image} />
                    <Typography variant="h6" className={classes.PTitle}>
                        Incredible and result! our sales increased<br />
                        over 400% when we worked with Sunnyside.<br /> Highly recommended.
                    </Typography>
                    <div className={classes.divBottom}>
                        <Typography component="legend" className={classes.Name}>
                            Jennie F.
                        </Typography>
                        <Typography variant="subtitle1" className={classes.work}>
                            Business Owner
                        </Typography>

                    </div>
                </Box>
            </div>
        </div>
    );
}

export default Testimonials;