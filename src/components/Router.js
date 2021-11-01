import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import FilteredPage from './FilteredPage';
import DetailFood from '../containers/DetailFood'

const AppRouter = () => {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/category" component={FilteredPage} />
        <Route path="/DetailPage/:name" component={DetailFood} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
  )
}

export default AppRouter;
