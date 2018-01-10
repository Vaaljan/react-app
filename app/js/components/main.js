import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
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
                                        <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
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
                            <img src="/img/logo.png" width="50%" />
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="container">
                    {this.props.children}
                </div>

                <FooterContent />

                {/* Wrapping Div End  => */}</div>
        );
    }
}

function FooterContent() {
    return (
        <div>
        <div className="container">
            <div className="footer">
                <div className="col-md-2">
                    <a>Terms of Use</a>
                </div>
                <div className="col-md-2">
                    <a>Privacy Policy</a>
                </div>
                <div className="col-md-8">
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="bottomBanner">
                    <div className="displayInline">Designed with <div className="love"></div></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Main