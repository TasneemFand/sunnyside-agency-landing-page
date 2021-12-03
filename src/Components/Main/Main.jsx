import React  from 'react';
import { Typography } from '@material-ui/core';
import Header from '../Header/Header';
import arrowDown from '../../Assets/Images for sunnyside-agency/icon-arrow-down.svg';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';
import cover from '../../Assets/Images for sunnyside-agency/desktop/image-header.jpg';
import coverMobile from '../../Assets/Images for sunnyside-agency/mobile/image-header-mobile.jpg';


const Main = ({click, el1}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 600px)');


    
    let MainMobile = null;

    isMobile ? MainMobile = (
        <div ref={el1} className={classes.coverMobile} style={{ backgroundImage: `url(${coverMobile})` }}>
            <Header />
            <Typography gutterBottom variant="h5" className={classes.Basetitle}>
                WE ARE CREATIVES
            </Typography>
            <div className={classes.arrowDownIcon} >
                <img src={arrowDown} onClick={click}/>
            </div>
        </div>

    ) : MainMobile = (
        <div ref={el1} className={classes.cover} style={{ backgroundImage: `url(${cover})` }}>
            <Header />
            <Typography gutterBottom variant="h5" className={classes.Basetitle}>
                WE ARE CREATIVES
            </Typography>
            <div className={classes.arrowDownIcon} >
                <img src={arrowDown} onClick={click}/>
            </div>

        </div>

    );

    return (
        <div className="Main">
            {MainMobile}
        </div>
    );

}

export default Main;
