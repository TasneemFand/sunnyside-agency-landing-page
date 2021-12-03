import { Drawer, Divider, IconButton } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import ReorderIcon from '@material-ui/icons/Reorder';
import React, { useState } from 'react';
import './SideNav.css';

const SideNav = () => {
    const [isDrawerOpened, setIsDrawerOpened] = useState(false);
    const toggleDrawerStatus = () => {
        setIsDrawerOpened(true);
    }
    const closeDrawer = () => {
        setIsDrawerOpened(false);
    }

    return (
        <div>
            <div>
                <IconButton onClick={toggleDrawerStatus}>
                    <ReorderIcon />
                </IconButton>
            </div>
            <Divider />
            <Drawer
                variant="temporary"
                open={isDrawerOpened}
                onClose={closeDrawer}
                anchor="right"
            >
                <a href="About" >
                    <List>
                        <ListItem button key='About Us' className="Item">
                            <ListItemText primary='About Us' />
                        </ListItem>
                    </List>

                </a>
                <a href="Services">
                    <List>
                        <ListItem button key='Services' className="Item">
                            <ListItemText primary='Services' />
                        </ListItem>
                    </List>
                </a>
                <a href="Projects">
                    <List>
                        <ListItem button key='Projects' className="Item">
                            <ListItemText primary='Projects' />
                        </ListItem>
                    </List>
                </a>
                <a href="Contact">
                    <List>
                        <ListItem button key='Contact' className="contact">
                            <ListItemText primary='Contact' />
                        </ListItem>
                    </List>
                </a>

            </Drawer>
        </div>

    );
}

export default SideNav;