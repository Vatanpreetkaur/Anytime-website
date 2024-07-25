// import React from 'react';
// import { Container, Typography } from '@mui/material';
// import ProductList from './components/ProductList';
// import ContactForm from './components/ContactForm';

// const App = () => {
//   return (
//     <Container>
//       <Typography variant="h2" component="h1" gutterBottom>
//         Our Products
//       </Typography>
//       <ProductList />
//       <Typography variant="h2" component="h1" gutterBottom style={{ marginTop: '2rem' }}>
//         Contact Us
//       </Typography>
//       <ContactForm />
//     </Container>
//   );
// };

// export default App;



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => (
  <Router>
    <Header />
    
      <Route exact path="/" component={HomePage} />
      {/* <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} /> */}
   
    <Footer />
  </Router>
);

export default App;
