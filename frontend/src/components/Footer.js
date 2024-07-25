// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box mt={5} bgcolor="text.secondary" color="white" p={2} textAlign="center">
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} Dock & Door Company. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
