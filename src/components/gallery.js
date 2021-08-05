import React from "react";
import './gallery.css';

function Gallery() {
    return(
    <div className="main">
        <div class="heading">
            <h4>Gallery</h4>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 art" id="artwork">
                    <h6>Smudge Arts</h6>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 gallery" alt=""><img
                    src="images/3.jpg" /></div>
                <div class="col-md-4 gallery" alt=""><img
                    src="images/4.jpg" /></div>
                <div class="col-md-4 gallery" alt=""><img
                    src="images/6.jpg" /></div>
            </div>
            <div class="row">
                <div class="col-md-12 art" id="manpu">
                    <h6>Manipulations</h6>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 gallery" alt=""><img
                    src="images/1.jpg" /></div>
                <div class="col-md-4 gallery" alt=""><img
                    src="images/2.jpg" /></div>
                <div class="col-md-4 gallery" alt=""><img
                    src="images/5.jpg" /></div>
            </div>
        </div>
    </div>
    );
}

export default Gallery;