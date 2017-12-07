import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Shop extends Component {

    render(){
        const products = this.props.productData;
        const productList = products.map((item)=>{
            return(
                <NavLink to={"/shop/"+item.id} className="list-group-item" key={item.id}>
                 {item.name}
                </NavLink>
            )
        });

        return (
            <div>
                <h1>Shop page</h1>
                <div className="list-group">
                    {productList}
                </div>
            </div>
        );
    }
}

export default Shop
