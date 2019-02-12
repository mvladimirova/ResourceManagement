import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';

const ToolbarView = (props) => {
    const handleDrawerOpen = (ev) => {
        console.log('click');
    }

    return (
        <Toolbar>
             <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
    )
};

export default ToolbarView;