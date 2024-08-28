// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

// const TopBar = styled(AppBar)({
//   backgroundColor: '#000', // You can change this color as needed
//   color: '#fff',
//   padding: '0.5rem 1rem',
//   position: 'relative',
// });

// const TopBarContent = styled(Box)({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// });

// const PhoneNumber = styled(Typography)({
//   fontSize: '1rem',
// });



const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* <TopBar position="static">
        <Toolbar>
          <TopBarContent>
          <Box display="flex" >
          <PhoneNumber>(800) 929-3667</PhoneNumber>
          <Button variant="contained" color="secondary" href="#contact">
              Get a Quote
            </Button>
        </Box>
            
          </TopBarContent>
        </Toolbar>
      </TopBar> */}

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Anytime Dock & Door Ltd.
          </Typography>
          {/* <Button color="inherit" sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/">Home</Button>
          <Button color="inherit" sx={{display:{xs:'none' ,sm:"block"}}}component={Link} to="/about">About</Button>
          <Button color="inherit"sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/services">Services</Button>
          <Button color="inherit"sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/contact">Contact</Button> */}
          <Button color="inherit" sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/">Home</Button>
          <Button color="inherit" sx={{display:{xs:'none' ,sm:"block"}}}component={Link} to="/about">About</Button>
          <Button color="inherit"sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/services">Services</Button>
          <Button color="inherit"sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/contact">Contact</Button>


        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem  component={Link} to="/Home" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/services" onClick={toggleDrawer(false)}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
