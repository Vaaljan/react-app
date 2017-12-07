
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

const prodData = [{
    id: 1,
    name: 'Honda Accord Crosstour',
    year: '2010',
    model: 'Accord Crosstour',
    make: 'Honda',
    media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
    price: '$16,811'

}];


render(
    <Router>
        <div>
        <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" render={()=> <Shop productData={prodData}/>}/>
        <Route path="/shop/:id" render={(props)=> <Products productData={prodData} routeProps={props}/>}/>
        <Route path="/contact" component={Contact}/>
        </Main>
        </div>
  </Router>,
    document.getElementById('myApp')
);
