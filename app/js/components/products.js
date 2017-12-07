import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

class Products extends Component {
    handleRedirect(){
        this.props.routeProps.history.push("/shop")
    }
    render(){
        const products = this.props.productData;
        const id = this.props.routeProps.match.params.id;
        const item = products.filter(item => {
            if(item.id == id) {
                return item;
            }
        });
        return(
            <div>
                <h1>{item[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={item[0].media} alt={item[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {item[0].model}</li>
                           <li><strong>Make</strong>: {item[0].make}</li>
                           <li><strong>Year</strong>: {item[0].year}</li>
                           <li><strong>Price</strong>: {item[0].price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                    <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Cars</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products