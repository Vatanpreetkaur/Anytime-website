// src/components/HomePage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => (
  <Container>
    <Box my={4}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Dock & Door Company
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Your trusted partner for all dock and door solutions.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We provide high-quality dock and door installation, repair, and maintenance services for businesses of all sizes.
      </Typography>
    </Box>
  </Container>
);

export default HomePage;
