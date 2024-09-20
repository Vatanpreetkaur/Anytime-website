import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import Services from './components/Services';
import About from './components/About';


const App = () => (
  <Router>

    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />}
      /> {/* Use the correct component */}

      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />

      <Route path="/*" element={<HomePage />} />
    </Routes>
    <Footer />

  </Router>
);

export default App;
