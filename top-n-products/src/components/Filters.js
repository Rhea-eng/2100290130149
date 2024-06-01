
import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';

const Filters = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleFilterChange = (field, value) => {
    setLocalFilters({ ...localFilters, [field]: value });
  };

  const applyFilters = () => {
    setFilters(localFilters);
  };

  return (
    <Box display="flex" flexDirection="column" mb={2}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          value={localFilters.category}
          onChange={e => handleFilterChange('category', e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem>
          <MenuItem value="home">Home</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Company</InputLabel>
        <Select
          value={localFilters.company}
          onChange={e => handleFilterChange('company', e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="company1">Company 1</MenuItem>
          <MenuItem value="company2">Company 2</MenuItem>
          <MenuItem value="company3">Company 3</MenuItem>
          <MenuItem value="company4">Company 4</MenuItem>
          <MenuItem value="company5">Company 5</MenuItem>
        </Select>
      </FormControl>

      <Box mt={2}>
        <Typography gutterBottom>Rating</Typography>
        <Slider
          value={localFilters.rating}
          onChange={(e, newValue) => handleFilterChange('rating', newValue)}
          aria-labelledby="rating-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={5}
        />
      </Box>

      <Box mt={2}>
        <Typography gutterBottom>Price Range</Typography>
        <Slider
          value={localFilters.priceRange}
          onChange={(e, newValue) => handleFilterChange('priceRange', newValue)}
          aria-labelledby="price-range-slider"
          valueLabelDisplay="auto"
          min={0}
          max={1000}
        />
      </Box>

      <FormControlLabel
        control={
          <Checkbox
            checked={localFilters.available}
            onChange={e => handleFilterChange('available', e.target.checked)}
            name="available"
            color="primary"
          />
        }
        label="Available"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={applyFilters}
        style={{ marginTop: '10px' }}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;
