import React from 'react';
import { Grid, Box } from '@material-ui/core';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';

// Images for Desktop
import imageCone from '../../Assets/Images for sunnyside-agency/desktop/image-gallery-cone.jpg';
import imageMilk from '../../Assets/Images for sunnyside-agency/desktop/image-gallery-milkbottles.jpg';
import Orange from '../../Assets/Images for sunnyside-agency/desktop/image-gallery-orange.jpg';
import sugar from '../../Assets/Images for sunnyside-agency/desktop/image-gallery-sugarcubes.jpg';

// Images for mobile
import imageConeMobile from '../../Assets/Images for sunnyside-agency/desktop/image-gallery-cone.jpg';
import imageMilkMobile from '../../Assets/Images for sunnyside-agency/desktop/image-gallery-milkbottles.jpg';
import OrangeMobile from '../../Assets/Images for sunnyside-agency/desktop/image-gallery-orange.jpg';
import sugarMobile from '../../Assets/Images for sunnyside-agency/desktop/image-gallery-sugarcubes.jpg';

const Gallery = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');
    let gallery = null;
    isMobile ? gallery = (
        <div style={{ marginTop: '70px'}}>
            <Box className={classes.Gallery}>
                <img src={imageMilkMobile} className={classes.Image} />
                <img src={OrangeMobile} className={classes.Image} />

            </Box>
            <Box className={classes.Gallery}>
                <img src={imageConeMobile} className={classes.Image} />
                <img src={sugarMobile} className={classes.Image} />

            </Box>
        </div>


    ) : gallery = (
        <div style={{ display: 'flex' }}>
            <Box className={classes.Gallery}>
                <img src={imageMilk} className={classes.Image} />
            </Box>
            <Box className={classes.Gallery}>
                <img src={Orange} className={classes.Image} />
            </Box>
            <Box className={classes.Gallery}>
                <img src={imageCone} className={classes.Image} />
            </Box>
            <Box className={classes.Gallery}>
                <img src={sugar} className={classes.Image} />
            </Box>
        </div>
    );


    return (
        <div>
        {gallery}

        </div>
    );
}

export default Gallery;