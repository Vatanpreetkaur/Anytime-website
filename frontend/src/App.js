import React from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Our Products
      </Typography>
      <ProductList />
      <Typography variant="h2" component="h1" gutterBottom style={{ marginTop: '2rem' }}>
        Contact Us
      </Typography>
      <ContactForm />
    </Container>
  );
};

export default App;
