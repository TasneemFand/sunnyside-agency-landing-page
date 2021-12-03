import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';

// Images for Desktop
import imageTransform from '../../Assets/Images for sunnyside-agency/desktop/image-transform.jpg';
import imageStandOut from '../../Assets/Images for sunnyside-agency/desktop/image-stand-out.jpg';
import graphicDesign from '../../Assets/Images for sunnyside-agency/desktop/image-graphic-design.jpg';
import photography from '../../Assets/Images for sunnyside-agency/desktop/image-photography.jpg';

// Images for mobile
import imageTransformMobile from '../../Assets/Images for sunnyside-agency/mobile/image-transform.jpg';
import imageStandOutMobile from '../../Assets/Images for sunnyside-agency/mobile/image-stand-out.jpg';
import graphicDesignMobile from '../../Assets/Images for sunnyside-agency/mobile/image-graphic-design.jpg';
import photographyMobile from '../../Assets/Images for sunnyside-agency/mobile/image-photography.jpg';

const Works = ({el2}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');
    let works = null;


    !isMobile ? works = (
        < div ref={el2}>
            <Grid container style={{ width: '100%' }} >
                <Grid item xs={12} md={6}>
                    <div className={classes.insideTransform}>
                        <div className={classes.divInside}>
                            <Typography variant="h5" className={classes.BaseTitle}>Transform your<br />brand</Typography>
                            <Typography className={classes.Title}>we are full-service creative agency specializing in <br />
                                helping brands grow fast. Engage your clients through <br />
                                compelling visuals that do most of the marketing for you.
                            </Typography>
                            <Button className={classes.buttonTransform} size="small" color="primary">
                                LEARN MORE
                            </Button>

                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.imageTransform}>
                        <img src={imageTransform} style={{ width: '100%', height: '100%' }} />
                    </div>
                </Grid>
            </Grid>

            <Grid container style={{ width: '100%' }}>
                <Grid item xs={12} md={6}>
                    <div className={classes.imageTransform}>
                        <img src={imageStandOut} style={{ width: '100%', height: '100%' }} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.insideTransform}>
                        <div className={classes.divInside}>
                            <Typography variant="h5" className={classes.BaseTitle}>Stand out to the right<br />audience</Typography>
                            <Typography className={classes.Title}>Using a collaborative formula of designers,researchers, <br />
                                photograpghers, videograpghers, and copywriters, we'll<br />
                                build and extend your brand in digital places.
                            </Typography>
                            <Button className={classes.buttonStandOut} size="small" color="primary">
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </Grid>

            </Grid>
            <Grid container style={{ width: '100%' }}>
                <Grid item xs={12} md={6}>
                    <div className={classes.containerDiv}>
                        <img src={graphicDesign} style={{ width: '100%', height: '100%' }} />
                        <div className={classes.insideImage}>
                            <Typography variant="h5" className={classes.titleInsideGraphic}>Graphic Design</Typography>
                            <Typography className={classes.pInsideGraphic}>Great design makes you memorable. we deliver<br />
                                artwork that underscores your brand message<br />
                                and captures potential client's attention.
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.containerDiv} >
                        <img src={photography} style={{ width: '100%', height: '100%' }} />
                        <div className={classes.insideImage}>
                            <Typography variant="h5" className={classes.titleInsidePhotography}>Photography</Typography>
                            <Typography className={classes.pInsidePhotography}>Increase your credibility by getting the most <br />
                                stunning, high-quality photos that improve your<br />
                                business image.
                            </Typography>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </div >

    ) : works = (
        < div ref={el2}>
            <Grid container style={{ width: '100%' }} >
                <Grid item >
                    <div className={classes.imageTransform}>
                        <img src={imageTransformMobile} style={{ width: '100%', height: '100%' }} />
                    </div>
                </Grid>
                <Grid item style={{ width: '100%' }}>
                    <div className={classes.insideTransform}>
                        <div className={classes.divInside}>
                            <Typography variant="h5" className={classes.BaseTitle}>Transform your<br />brand</Typography>
                            <Typography className={classes.Title}>we are full-service creative agency<br />
                                specializing in helping brands grow fast.<br />
                                Engage your clients through compelling<br />
                                visuals that do most of the marketing for <br />you.
                            </Typography>
                            <Button className={classes.buttonTransform} size="small" color="primary">
                                LEARN MORE
                            </Button>

                        </div>
                    </div>

                </Grid>
            </Grid>

            <Grid container style={{ width: '100%' }}>
                <Grid item >
                    <div className={classes.imageTransform}>
                        <img src={imageStandOutMobile} style={{ width: '100%', height: '100%' }} />
                    </div>
                </Grid>
                <Grid item style={{ width: '100%' }}>
                    <div className={classes.insideTransform}>
                        <div className={classes.divInside}>
                            <Typography variant="h5" className={classes.BaseTitle}>Stand out to the<br />right audience</Typography>
                            <Typography className={classes.Title}>Using a collaborative formula of<br/>
                                designers, researchers, photograpghers, <br /> videograpghers, and copywriters, we'll<br />
                                build and extend your brand in digital<br /> places.
                            </Typography>
                            <Button className={classes.buttonStandOut} size="small" color="primary">
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </Grid>

            </Grid>
            <Grid container style={{ width: '100%' }}>
                <Grid item >
                    <div className={classes.containerDiv}>
                        <img src={graphicDesignMobile} style={{ width: '100%', height: '100%' }} />
                        <div className={classes.insideImage}>
                            <Typography variant="h5" className={classes.titleInsideGraphic}>Graphic Design</Typography>
                            <Typography className={classes.pInsideGraphic}>Great design makes you memorable. we deliver<br />
                                artwork that underscores your brand message<br />
                                and captures potential client's attention.
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.containerDiv} >
                        <img src={photographyMobile} style={{ width: '100%', height: '100%' }} />
                        <div className={classes.insideImage}>
                            <Typography variant="h5" className={classes.titleInsidePhotography}>Photography</Typography>
                            <Typography className={classes.pInsidePhotography}>Increase your credibility by getting the most <br />
                                stunning, high-quality photos that improve your<br />
                                business image.
                            </Typography>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </div >
    );

    return (
        <div>
            {works}
        </div>
    );
}

export default Works;


