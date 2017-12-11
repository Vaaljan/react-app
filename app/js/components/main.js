import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <nav className="navbar navbar-default" id="mainNavigation">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span>Menu</span>
                                </button>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-center">
                                        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                                        <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
                                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className=" col-md-2">
                            <div className="socailMedia">
                                <img src="/img/socialSprite.png" width="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="logo col-md-12">
                            {/* <img src="/img/logo.png" width="50%" /> */}
                        </div>
                    </div>
                </div>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
        );
    }
}

export default Main