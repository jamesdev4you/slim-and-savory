import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../assets/Logo.png';
import '../../navlink.css';
import '../../index.css';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Appointment', href: '/appointment' },
  { text: 'Team', href: '/team' },
  { text: 'Gallery', href: '/gallery' },
];

const secondaryItems = [
  { text: 'My Favorites', href: '/' },
  { text: 'Newsletter', href: '/appointment' },
];

export default function NavBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: '#E4DCC0' }}
    >
      <img src={Logo} alt='yooo' style={{ height: '150px', width: '150px' }} />
      <Divider sx={{ backgroundColor: '#1B1E1E' }} />
      <List sx={{ backgroundColor: '#E4DCC0' }}>
        {navItems.map((item) => (
          <ListItem key={item.text} sx={{ margin: '30px 0px' }} disablePadding>
            <NavLink
              style={{
                textDecoration: 'none',
                color: '#1B1E1E',
                fontFamily: 'Birds',
                fontSize: '24px',
                margin: 'auto',
              }}
              to={item.href}
            >
              {item.text}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Box
      sx={{
        backgroundColor: '#FFF5E1',
        padding: '16px',
        textAlign: 'center',
        fontFamily: 'Birds',
        fontSize: '20px',
        color: '#1B1E1E',
      }}
    >
      Welcome to Slim & Savory!
    </Box>
        <Toolbar sx={{ backgroundColor: '#E4DCC0' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
          >
            <MenuIcon sx={{ color: '#1B1E1E' }} />
          </IconButton>
          <Box
            alt='yooo'
            sx={{
              display: { sm: 'none', md: 'block' },
              height: '80px',
              width: '80px',
              marginLeft: {
                xs: 'auto',
                sm: 'auto',
                md: '0',
                lg: '0',
                xl: '0',
              },
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
         <Box
  sx={{
    display: { xs: 'none', sm: 'none', md: 'flex' },
    marginLeft: 'auto',
    alignItems: 'center',
  }}
>
  {navItems.map((item, index) => (
    <Box
      key={item.href}
      sx={{
        display: 'flex',
        alignItems: 'center',
        mx: 4 // ✅ Equal spacing on both sides of the whole unit
      }}
    >
      {/* Divider – only if not the first item */}
      {index !== 0 && (
        <Box
          sx={{
            width: '1px',
            height: '24px',
            backgroundColor: '#000',
            marginRight: 2, // space between line and link
          }}
        />
      )}

      {/* NavLink */}
      <NavLink
        className='menu_link'
        style={{
          fontFamily: 'Birds',
          textTransform: 'none',
          color: '#1B1E1E',
          textDecoration: 'none',
        }}
        to={item.href}
      >
        {item.text}
      </NavLink>
    </Box>
  ))}
</Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
              marginLeft: 'auto',
            }}
          >
            {secondaryItems.map((item) => (
              <NavLink
                key={item.href}
                className='menu_link'
                style={{
                  fontFamily: 'Birds',
                  textTransform: 'none',
                  fontSize: "12px",
                  textDecoration: 'underline'
                }}
                to={item.href}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ backgroundColor: '#E4DCC0' }}>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#E4DCC0',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Outlet />
    </Box>
  );
}
