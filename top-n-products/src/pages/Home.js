
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import Layout from '../components/Layout';
import { Grid } from '@mui/material';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: 0,
    priceRange: [0, 1000],
    available: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(filters.category, filters.company);
        setProducts(data);
        setFilteredProducts(applyFilters(data, filters));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [filters]);

  const applyFilters = (products, filters) => {
    return products
      .filter(product =>
        filters.category ? product.category === filters.category : true,
      )
      .filter(product =>
        filters.company ? product.company === filters.company : true,
      )
      .filter(product => product.rating >= filters.rating)
      .filter(
        product =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1],
      )
      .filter(product => (filters.available ? product.available : true));
  };

  return (
    <Layout>
      <Filters filters={filters} setFilters={setFilters} />
      <Grid container spacing={2}>
        {filteredProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
