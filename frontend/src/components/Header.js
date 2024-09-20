// // src/components/Header.js
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
// import { styled } from '@mui/system';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';
// import logo from '../assets/homepage/anytimelogo.jpeg';

// // const TopBar = styled(AppBar)({
// //   backgroundColor: '#000', // You can change this color as needed
// //   color: '#fff',
// //   padding: '0.5rem 1rem',
// //   position: 'relative',
// // });

// // const TopBarContent = styled(Box)({
// //   display: 'flex',
// //   justifyContent: 'space-between',
// //   alignItems: 'center',
// // });

// // const PhoneNumber = styled(Typography)({
// //   fontSize: '1rem',
// // });



// const Header = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   return (
//     <>
//       {/* <TopBar position="static">
//         <Toolbar>
//           <TopBarContent>
//           <Box display="flex" >
//           <PhoneNumber>(800) 929-3667</PhoneNumber>
//           <Button variant="contained" color="secondary" href="#contact">
//               Get a Quote
//             </Button>
//         </Box>
            
//           </TopBarContent>
//         </Toolbar>
//       </TopBar> */}

//       <AppBar position="static">
//         <Toolbar>
//           <Box component={Link} to="/" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
//             <img src={logo} alt="Anytime Dock & Door Ltd." style={{ height: '40px', marginRight: '10px', borderRadius: '20px'}} />
//             <Typography variant="h6">
//               Anytime Dock & Door Ltd.
//             </Typography>
//           </Box>
//           {/* <Button color="inherit" sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/">Home</Button>
//           <Button color="inherit" sx={{display:{xs:'none' ,sm:"block"}}}component={Link} to="/about">About</Button>
//           <Button color="inherit"sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/services">Services</Button>
//           <Button color="inherit"sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/contact">Contact</Button> */}
//           <Button color="inherit" sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/">Home</Button>
//           <Button color="inherit" sx={{display:{xs:'none' ,sm:"block"}}}component={Link} to="/about">About</Button>
//           <Button color="inherit"sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/services">Services</Button>
//           <Button color="inherit"sx={{display:{xs:'none' ,sm:"block"}}} component={Link} to="/contact">Contact</Button>


//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <List>
//           <ListItem  component={Link} to="/Home" onClick={toggleDrawer(false)}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
//             <ListItemText primary="About" />
//           </ListItem>
//           <ListItem button component={Link} to="/services" onClick={toggleDrawer(false)}>
//             <ListItemText primary="Services" />
//           </ListItem>
//           <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
//             <ListItemText primary="Contact" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default Header;


import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/homepage/anytimelogo.jpeg';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    // <>
    //   {/* AppBar with Logo and Menu */}
    //   <AppBar position="static">
    //     <Toolbar>
    //       {/* Mobile: Display Menu Icon */}
    //       <IconButton 
    //         color="inherit" 
    //         edge="start" 
    //         sx={{ display: { xs: 'block', sm: 'none' } }} 
    //         onClick={toggleDrawer(true)}
    //       >
    //         <MenuIcon />
    //       </IconButton>

    //       {/* Desktop: Display Logo and Nav Links */}
    //       <Box 
    //         component={Link} 
    //         to="/" 
    //         sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
    //       >
    //         <img src={logo} alt="Anytime Dock & Door Ltd." 
    //              style={{ height: '40px', marginRight: '10px', borderRadius: '20px', display: { xs: 'none', sm: 'block' } }} />
    //         <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
    //           Anytime Dock & Door Ltd.
    //         </Typography>
    //       </Box>

    //       {/* Desktop: Navigation Buttons */}
    //       <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} to="/">Home</Button>
    //       <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} to="/about">About</Button>
    //       <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} to="/services">Services</Button>
    //       <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} to="/contact">Contact</Button>
    //     </Toolbar>
    //   </AppBar>

    //   {/* Drawer for Mobile Menu */}
    //   <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
    //     <List>
    //       <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
    //         <ListItemText primary="Home" />
    //       </ListItem>
    //       <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
    //         <ListItemText primary="About" />
    //       </ListItem>
    //       <ListItem button component={Link} to="/services" onClick={toggleDrawer(false)}>
    //         <ListItemText primary="Services" />
    //       </ListItem>
    //       <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
    //         <ListItemText primary="Contact" />
    //       </ListItem>
    //     </List>
    //   </Drawer>
    // </>

    <>
  {/* AppBar with Logo and Menu */}
  <AppBar position="static">
    <Toolbar>
      {/* Mobile: Display Menu Icon */}
      <IconButton 
        color="inherit" 
        edge="start" 
        sx={{ display: { xs: 'block', sm: 'none' } }} 
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Desktop: Display Logo and Nav Links */}
      <Box 
        component={Link} 
        to="/" 
        sx={{ 
          flexGrow: 1, 
          display: { xs: 'none', sm: 'flex' }, // Hide on mobile, show on desktop
          alignItems: 'center', 
          textDecoration: 'none', 
          color: 'inherit' 
        }}
      >
        <img 
          src={logo} 
          alt="Anytime Dock & Door Ltd." 
          style={{ height: '40px', marginRight: '10px', borderRadius: '20px' }} 
        />
        <Typography variant="h6">
          Anytime Dock & Door Ltd.
        </Typography>
      </Box>

      {/* Desktop: Navigation Buttons */}
      <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} to="/">Home</Button>
      <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} to="/about">About</Button>
      <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} to="/services">Services</Button>
      <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }} component={Link} to="/contact">Contact</Button>
    </Toolbar>
  </AppBar>

  {/* Drawer for Mobile Menu */}
  <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}
  PaperProps={{
    sx: { width: '100%', height: 'auto', padding: '50px 0', paddingLeft: '10rem'} // Full width on mobile
  }}>
    <List 
>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
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

