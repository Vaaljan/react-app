import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

class ProductItem extends Component {
    handleRedirect(){
        this.props.routeProps.history.push('/shop')
    }

    
    render(){
        const products = this.props.categoryData.included.products;
        const id = this.props.routeProps.match.params.id;
        const item = products.filter(item => {
            if(item.id == id) {
                return item;
            }
        });
        const productItem = item[0];
        return(
            <div>
                <h1>{productItem.name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            {/* <img src={productItem.media} alt={productItem.name} /> */}
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Product Name</strong>: {productItem.name}</li>
                           <li><strong>Product Description</strong>: {productItem.description}</li>
                           <li><strong>Price</strong>: {productItem.price[0].amount}</li>

                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Show All Products</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem