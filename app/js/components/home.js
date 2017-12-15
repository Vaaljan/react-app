import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="howToContainer">
                <div className="row">
                    <div className="col-md-12">
                        <img src="img/howToBanner.png" width="100%" />
                    </div>
                    <div className="col-md-12">
                        <ChooseDesign />
                        <AddToCart />
                        <FillYourDetails />
                        <EmailInstruct />
                    </div>
                </div>
            </div>
        );
    }
};

function ChooseDesign() {
    return (
        <div className="howToContent">
            <h1>How to</h1>
            <div className="row howToItem">
                <div className="col-md-2">
                    <br />
                </div>
                <div className="col-md-4 howToIcon">
                    <img src="/img/chooseIcon.png" width="50%" />
                </div>
                <div className="col-md-4">
                    <h2>Choose your design</h2>
                    <p>Pick one of our specially designed templates.</p>
                </div>
                <div className="col-md-2">
                    <br />
                </div>
            </div>
        </div>
    )
};

function AddToCart() {
    return (
        <div className="row howToItem">
            <div className="col-md-2">
                <br />
            </div>
            <div className="col-md-4">
                <h2>Add your designs to your cart</h2>
                <p>Add the designs you are most in love with to your cart.</p>
            </div>
            <div className="col-md-4 howToIcon">
                <img src="/img/addCartIcon.png" width="50%" />
            </div>
            <div className="col-md-2">
                <br />
            </div>
        </div>
    )
};

function FillYourDetails() {
    return (
        <div className="row howToItem">
            <div className="col-md-2">
                <br />
            </div>
            <div className="col-md-4 howToIcon">
                <img src="/img/detailsIcon.png" width="50%" />
            </div>
            <div className="col-md-4">
                <h2>Fill our your details</h2>
                <p>Fill in the details you would like on your invitation in the notes section.</p>
            </div>
            <div className="col-md-2">
                <br />
            </div>

        </div>
    )
};

function EmailInstruct() {
    return (
        <div className="row howToItem">
            <div className="col-md-2">
                <br />
            </div>
            <div className="col-md-4">
                <h2>We will email you with further instructions</h2>
                <p>After we received your payment we will email you with a few questions so we can taylor your design to your taste.</p>
            </div>
            <div className="col-md-4 howToIcon">
                <img src="/img/sendInfoIcon.png" width="50%" />
            </div>

            <div className="col-md-2">
                <br />
            </div>

        </div>
    )
}

export default Home