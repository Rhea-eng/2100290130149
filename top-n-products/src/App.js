
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </Router>
  );
};

export default App;
