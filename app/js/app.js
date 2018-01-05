
import React, { Component } from 'react';
import { render } from 'react-dom';
import { gateway as MoltinGateway } from '@moltin/sdk';

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
import ProductItem from './components/products.js';
import Contact from './components/contact.js';


const Moltin = MoltinGateway({
    client_id: 'qKRonmK7IZATt9cgEUAcoC5G6QUC4JZuskieyAWkLJ'
});
let productData = {}
const products = Moltin.Products.With("main_image").All().then((products) => {
    productData = products;
});

let categoryData = {};
const categories = Moltin.Categories.With('products').All().then((categories) => {
    categoryData = categories;
});



render(
    <Router>
        <div>
        <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/products/:id" render={(props)=> <ProductItem productData={productData} categoryData={categoryData} routeProps={props}/>}/>
        <Route path="/shop" render={(props)=> <Shop routeOptions={props} productData={productData} categoryData={categoryData}/>}/>
        
        <Route path="/contact" component={Contact}/>
        </Main>
        </div>
  </Router>,
    document.getElementById('myApp')
);