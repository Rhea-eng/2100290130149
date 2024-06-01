
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductDetail from '../components/ProductDetail';

const Product = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  return (
    <Layout>
      {product ? <ProductDetail product={product} /> : <p>Product not found</p>}
    </Layout>
  );
};

export default Product;
