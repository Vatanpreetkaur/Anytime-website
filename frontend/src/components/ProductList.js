import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { Grid } from '@mui/material';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item key={product._id} xs={12} sm={6} md={4}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
