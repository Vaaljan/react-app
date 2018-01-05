import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

class ProductItem extends Component {
    constructor(props){
        super(props)
    }
    handleRedirect(){
        this.props.routeProps.history.push('/shop')
    }
    render(){
        const products = this.props.productData.data;
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
                            <ProductImages imageID={productItem.relationships.main_image.data.id} productData={this.props.productData}/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Product Name</strong>: {productItem.name}</li>
                           <li><strong>Product Description</strong>: {productItem.description}</li>
                           <li><strong>Price</strong>: {productItem.price[0].amount}</li>

                       </ul>
                    </div>

                    <div className="col-md-12">
                        <button className="btn btn-default showAllProducts" onClick={this.handleRedirect.bind(this)}>Show All Products</button>
                    </div>
                </div>
            </div>
        );
    }
}

class ProductImages extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const imageID = this.props.imageID;
        const allProductImages = this.props.productData.included.main_images;
        const getImage = allProductImages.find((arr) => {
            if (arr.id == imageID) {
                return arr;
            }
        });
        return (
            <div>
                 <img src={getImage.link.href} alt="Product Image" width="80%"/> 
            </div>
        )
    }
}

export default ProductItem