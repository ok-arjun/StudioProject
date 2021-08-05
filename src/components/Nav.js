import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav class="navbar navbar-light navbar-expand-lg position-fixed">
            <a class="navbar-brand" href="#"><b>O K Arjun Studio</b></a>
            <bupon class="navbar-toggler" type="bupon" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </bupon>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <Link to="/home" style={{textDecoration:'none'}}>
                        <li class="nav-item active">
                            <a class="nav-link" href="#home">&nbsp;Home&nbsp;</a>
                        </li>
                    </Link>
                    <Link to="gallery" style={{textDecoration:'none'}}>
                        <li class="nav-item active">
                            <a class="nav-link" href="#Gallery">&nbsp;Gallery&nbsp;</a>
                        </li>
                    </Link>
                    <Link to="login" style={{textDecoration:'none'}}>
                    <li class="nav-item active">
                        <a class="nav-link" href="#Login">&nbsp;Login&nbsp;</a>
                    </li>
                    </Link>
                    <Link to="" style={{textDecoration:'none'}}>
                    <li class="nav-item active">
                        <a class="nav-link" href="#contact">&nbsp;Contact
                            us&nbsp;</a>
                    </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;