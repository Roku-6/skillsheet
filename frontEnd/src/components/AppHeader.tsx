import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function AppHeader() {

  type Anchor = 'menuDrawer'

  const [state, setState] = React.useState({
    menuDrawer: false,
  });
  
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 256 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding alignItems='center'>
          山田太郎
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href='\ProfileEdit'>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText primary='プロフィール編集' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href='\ProfileEdit'>
            <ListItemIcon>
              <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText primary='サインアウト' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color='inherit'>
      <Toolbar>
        <IconButton
          onClick={toggleDrawer('menuDrawer', true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          sx={{ width: 540}}
          anchor={'left'}
          open={state['menuDrawer']}
          onClose={toggleDrawer('menuDrawer', false)}
        >
          {list('menuDrawer')}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
