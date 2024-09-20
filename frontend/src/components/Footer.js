// // src/components/Footer.js
// import React from 'react';
// import { Box, Typography, } from '@mui/material';

// const Footer = () => (
//   <>
//   <Box mt={5} bgcolor="text.secondary" color="white" p={2} textAlign="center">
//     <Typography variant="body1">
//       &copy; {new Date().getFullYear()} Dock & Door Company. All rights reserved.
//     </Typography>
//     <Typography variant="body2">
//       Email: Anytimedockdoor@gmail.com
//     </Typography>
//     <Typography variant="body2">
//       Phone: 6043639263
//     </Typography>
//   </Box>
  
//   facebook
//   instagram
//   email 
//   phone number
//   </>
// );

// export default Footer;

import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => (
  <>
    <Box mt={5} bgcolor="text.secondary" color="white" p={4} textAlign="center">
      {/* Company Info */}
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Dock & Door Company. All rights reserved.
      </Typography>

      {/* Contact Info */}
      <Typography variant="body2" mt={1}>
        Email: Anytimedockdoor@gmail.com
      </Typography>
      <Typography variant="body2" mb={2}>
        Phone: +1(604) 603 9170
      </Typography>

      {/* Social Media Icons */}
      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton href="https://www.facebook.com/profile.php?id=61550970171086&mibextid=LQQJ4d" target="_blank" aria-label="Facebook">
          <FacebookIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton href="https://www.instagram.com/anytimedockanddoor?igsh=aThkbXl6ZGtwM2Ry&utm_source=qr" target="_blank" aria-label="Instagram">
          <InstagramIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton href="mailto:anytimedockanddoor@gmail.com" aria-label="Email">
          <EmailIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton href="tel:+1(604)6039170" aria-label="Phone">
          <PhoneIcon sx={{ color: 'white' }} />
        </IconButton>
      </Stack>
    </Box>
  </>
);

export default Footer;

