import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './pages/ProductListing';
import ThankYouPage from './pages/ThankYouPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/thank-you" component={ThankYouPage} />
      </Switch>
    </Router>
  );
};

export default App;
