import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetail = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="body1">Company: {product.company}</Typography>
        <Typography variant="body1">Category: {product.category}</Typography>
        <Typography variant="body1">Price: ${product.price}</Typography>
        <Typography variant="body1">Rating: {product.rating}</Typography>
        <Typography variant="body1">Discount: {product.discount}%</Typography>
        <Typography variant="body1">
          Availability: {product.available ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
