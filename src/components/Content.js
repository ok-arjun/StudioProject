import './Content.css';
import React from 'react';

function Content() {
    return (
        <div className="container">
            <div className="card-group">
                <div className="row">
                <div className="card">
                    <img className="card-img-top" src="images/smudge.jpg" alt="card-img"></img>
                    <div className="card-body">
                        <h6 className="card-title">Smudge Paintings</h6>
                        <b><i className="text-danger float-left">₹300</i></b>
                        <i className="text-muted ml-2 off-price">₹400</i>
                        <button className="btn btn-primary float-right">Order Now</button>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="card">
                    <img className="card-img-top" src="images/caricature.jpg" alt="card-img"></img>
                    <div className="card-body">
                        <h6 className="card-title">Caricatures</h6>
                        <b><i className="text-danger float-left">₹500</i></b>
                        <i className="text-muted ml-2 off-price">₹600</i>
                        <button className="btn btn-primary float-right">Order Now</button>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="card">
                    <img className="card-img-top" src="images/manipulation.jpg" alt="card-img"></img>
                    <div className="card-body">
                        <h6 className="card-title">Manipulations</h6>
                        <b><i className="text-danger float-left">₹300</i></b>
                        <i className="text-muted ml-2 off-price">₹400</i>
                        <button className="btn btn-primary float-right">Order Now</button>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="card">
                    <img className="card-img-top" src="images/illustrator.jpg" alt="card-img"></img>
                    <div className="card-body">
                        <h6 className="card-title">Illustrations</h6>
                        <b><i className="text-danger float-left">₹500</i></b>
                        <i className="text-muted ml-2 off-price">₹600</i>
                        <button className="btn btn-primary float-right">Order Now</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Content;