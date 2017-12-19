import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { gateway as MoltinGateway } from '@moltin/sdk';


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



class Shop extends Component {
    render() {
        return (
            <div>
                <Categories />
            </div>
        )
    }
}

class Categories extends Component {
    render() {
        const catData = categoryData.data.map((item) => {
            return (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <Products productData={item.relationships.products.data} />
                </div>
            )
        });

            return (
                <div className="categories">
                    {catData}
                </div>
            )
    }
}

class Products extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const productArray = this._getProductData(this.props.productData);
        const productList = productArray.map((item) => {
            return (
                <div className="col-md-4" key={item.id}>
                    <NavLink to={"/shop/" + item.id} className="list-group-item" >
                        <div className="shopItem">
                            <div className="shopImage">
                                <ProductImages images={item} />
                            </div>
                            <div className="shopdesc">
                                <p>{item.name}</p>
                                <p>R {item.price[0].amount}</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            ) 
        });

        return (
            <div>
                <div className="shopContainer">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-eq-height">
                                {productList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _getProductData(categoryArray){
        const array = [];
        for(let i=0;i<categoryArray.length;i++){
            const catId = categoryArray[i].id;
            const findProducts = productData.data.find((arr)=>{
                if(arr.id == catId){
                    array.push(arr);
                }
            })
        }
       return array;
    }

}


class ProductImages extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const imageId = this.props.images.relationships.main_image.data.id;
        const getImage = productData.included.main_images.find((arr) => {
            if (arr.id == imageId) {
                return arr;
            }
        });
        return (
            <img src={getImage.link.href} width="100%" />
        )
    }
}


export default Shop
