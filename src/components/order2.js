import React from 'react';
import './order.css'

function Order2 (){
    return (
        <div className="container-fluid">
            <div className="order-media row">
                <div className="col-md-4">
                <img src="images/caricature.jpg" alt="smudge-model" className="order-img"></img>
                </div>
                <div className="col-md-4 order-details">
                    <h4><b>Caricatures</b></h4>
                    <div className="faces">
                        <h5><b>Number of faces in picture</b></h5>
                        <label><input type="radio" name="faces-radio" value="1"></input><b>1 Face</b></label>
                        <label><input type="radio" name="faces-radio" value="2"></input><b>2 Faces</b></label>
                        <label><input type="radio" name="faces-radio" value="3"></input><b>3 Faces</b></label>
                        <label><input type="radio" name="faces-radio" value="4"></input><b>4 Faces</b></label>
                        <label><input type="radio" name="faces-radio" value="5"></input><b>5 Faces</b></label>
                        <br/>
                        <span className="face-mean">
                        <i class="fa fa-info-circle"></i>&nbsp;&nbsp;
                        <i>Face count is nothing but how many persons are appeared on the picture you want to be edit</i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order2;