// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box mt={5} bgcolor="text.secondary" color="white" p={2} textAlign="center">
    <Typography variant="body1">
      &copy; {new Date().getFullYear()} Dock & Door Company. All rights reserved.
    </Typography>
    <Typography variant="body2">
      Email: Anytimedockdoor@gmail.com
    </Typography>
    <Typography variant="body2">
      Phone: 6043639263
    </Typography>
  </Box>
);

export default Footer;
