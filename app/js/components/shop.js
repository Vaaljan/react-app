import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';




class Shop extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Categories categoryData={this.props.categoryData} productData={this.props.productData}/>
            </div>
        )
    }
}

class Categories extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const catData = this.props.categoryData.data.map((item) => {
            return (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <ProductList productData={item.relationships.products.data} products={this.props.productData}/>
                </div>
            )
        });

            return (
                <div className="categories" id="categories">
                    {catData}
                </div>
            )
    }
}

class ProductList extends Component {
    constructor(props) {
        super(props)
        // this.state = this.props.state;
    }
    // componentWillReceiveProps(){
    //     this.setState({hideCategories:false});
    // }
    // setDisplay(){
    //     this.setState({hideCategories:true});
    //     console.log(this.state)
    // }
    render() {
        const productArray = this._getProductData(this.props.productData,this.props.products);
        const productList = productArray.map((item) => {
            return (
                <div className="col-md-4" key={item.id}>
                    <NavLink to={"/products/" + item.id} className="list-group-item">
                        <div className="shopItem">
                            <div className="shopImage">
                                <ProductImages images={item} productData={this.props.products}/>
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
  

    _getProductData(categoryArray,products){
        const array = [];
        for(let i=0;i<categoryArray.length;i++){
            const catId = categoryArray[i].id;
            const findProducts = products.data.find((arr)=>{
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
        const getImage = this.props.productData.included.main_images.find((arr) => {
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
