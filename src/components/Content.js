import './Content.css';
import React from 'react';

function Content() {
    return (
        <div className="container">
            <div className="card-group mx-auto">
            <div className="card">
                <img className="card-img-top" src="images/smudge.jpg" alt="card-img"></img>
                <div className="card-body">
                    <h6 className="card-title">Smudge Paintings</h6>
                    <p className="card-text">₹300 (per person)</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="images/caricature.jpg" alt="card-img"></img>
                <div className="card-body">
                    <h6 className="card-title">Caricatures</h6>
                    <p className="card-text">₹500 (per person)</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="images/manipulation.jpg" alt="card-img"></img>
                <div className="card-body">
                    <h6 className="card-title">Manipulations</h6>
                    <p className="card-text">₹300 (per person)</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="images/illustrator.jpg" alt="card-img"></img>
                <div className="card-body">
                    <h6 className="card-title">Illustrations</h6>
                    <p className="card-text">₹500 (per person)</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Content;