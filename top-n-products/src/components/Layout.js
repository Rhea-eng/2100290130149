import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Top Products</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
