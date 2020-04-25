import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from './components/header/header.component'

//styles
import './App.css';

//pages
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.components"

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>

  );
}

export default App;
