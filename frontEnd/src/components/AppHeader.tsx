import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import KeyStone from '../static/images/logo/keystone_logo.png'
import Meell from '../static/images/logo/meell_logo.png'
import owlly from '../static/images/logo/owlly_logo.png'
import Tooltip from '@mui/material/Tooltip';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

const drawerWidth = 256;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5C376',
    },
  },
});

const activeStyle = {
  color: '#FFF',
  borderLeft: '6px solid #A2A0F5',
  textDecoration: 'none',
  backgroundColor: '#5f5e73',
  width: '100%',
  display: 'inline-block',
};

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleProfileMenuOpen}
            size="large"
            edge="end"
            sx={{ ml: 2 }}
            aria-label="account of current user"
            aria-controls={isMenuOpen ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isMenuOpen ? 'true' : undefined}
          >
            <KeyboardArrowDownIcon />
            <AccountCircle />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={isMenuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Avatar /><Link to='/ProfileEdit'>Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Avatar /><Link to='/MyAccount'>My account</Link>
        </MenuItem><Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{height: "100vh", backgroundColor: "#42425C"}}>
      <Toolbar style={{backgroundColor: "#3D3B53"}}>
        <List>
          <ListItem>
            <ListItemText primary='SKILL SHEETS' style={{color: "#FFF", fontWeight: "bolder"}}/>
          </ListItem>
        </List>
      </Toolbar>
      <Divider />
      <List disablePadding>
        <NavLink
          end
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : {color: "#FFF", textDecoration: 'none'})}
        >
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={KeyStone} variant='square' sx={{ width: 24, height: 24}}/>
              </ListItemAvatar>
              <ListItemText primary='KeyStone'/>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          end
          to="/meell"
          style={({ isActive }) => (isActive ? activeStyle : {color: "#FFF", textDecoration: 'none'})}
        >
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={Meell}variant='square' sx={{ width: 24, height: 24}}/>
              </ListItemAvatar>
              <ListItemText primary='Meell'/>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          end
          to="/owlly"
          style={({ isActive }) => (isActive ? activeStyle : {color: "#FFF", textDecoration: 'none'})}
        >
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={owlly}variant='square' sx={{ width: 24, height: 24}}/>
              </ListItemAvatar>
              <ListItemText primary='owlly'/>
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        color='inherit'
        elevation={0} 
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Search sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          
          <ThemeProvider theme={theme}>
            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
              <IconButton
                size="large"
              >
                <Badge
                  variant='dot'
                  color="primary" 
                >
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
              >
                <Badge
                  variant='dot'
                  color="primary"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Divider orientation='vertical' variant="middle" flexItem />
              {renderMenu}
            </Box>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
