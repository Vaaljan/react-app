
import React, { Component } from 'react';
import { render } from 'react-dom';

// Import routing components
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom'


import Main from './components/main.js';
import Home from './components/home.js';
import About from './components/about.js';
import Shop from './components/shop.js';
import Products from './components/products.js';
import Contact from './components/contact.js';




render(
    <Router>
        <div>
        <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" render={()=> <Shop />}/>
        <Route path="/shop/:id" render={(props)=> <Products  routeProps={props}/>}/>
        <Route path="/contact" component={Contact}/>
        </Main>
        </div>
  </Router>,
    document.getElementById('myApp')
);