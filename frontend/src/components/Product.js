import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


const Product = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={product.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
