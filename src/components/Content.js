import './Content.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Carousel from './carousel';


function Content() {
    return (
        <div className="body-main">
            <Carousel></Carousel>
            <h5 className="product-title text-center"><b>OUR PRODUCTS</b></h5>
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
            <h5 className="process-title text-center"><b>HOW WE WORK</b></h5>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 process-media">
                        <div className="d-flex">
                            <div className="process-icon1">
                                <i className="fa fa-shopping-cart fa-2x"></i>
                            </div>
                            <div className="process-body">
                                <b>Upload photo and place order</b>
                                <br /><span>No hidden charges.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 process-media">
                        <div className="d-flex">
                            <div className="process-icon1">
                                <i className="fa fa-paint-brush fa-2x"></i>
                            </div>
                            <div className="process-body">
                                <b>Painting Starts</b>
                                <br /><span>WhatsApp support along the process.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 process-media">
                        <div className="d-flex">
                            <div className="process-icon1">
                                <i className="fa fa-image fa-2x"></i>
                            </div>
                            <div className="process-body">
                                <b>Preview your painting</b>
                                <br /><span>Art will be shared before framing.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 process-media">
                        <div className="d-flex">
                            <div className="process-icon1">
                                <i className="fa fa-truck fa-2x"></i>
                            </div>
                            <div className="process-body">
                                <b>Framed & Delivered</b>
                                <br /><span>Depends if you have selected for frame.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;