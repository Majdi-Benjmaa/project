import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
//Components
import Search from './components/search';
import Cart from './components/cart';

function App() {
  

  return (
    <>
     <Router>
        <Navbar />
        <Switch>
          {/* User Routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/product/:productId" component={Product} />
          <Route exact path="/cart" component={Cart} />
          </Switch> 
          </Router>
    </>
  )
}

export default App
