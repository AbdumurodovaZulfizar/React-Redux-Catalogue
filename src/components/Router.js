import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

const AppRouter = () => {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
  )
}

export default AppRouter;
