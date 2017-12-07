import React, { Component } from 'react';


class Products extends Component {
    handleRedirect(){
        browserHistory.push('/cars');
    }
    render(){
        return(
        <div>Products</div>
        );
    }
}

export default Products