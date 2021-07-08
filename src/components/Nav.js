import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav class="navbar navbar-light navbar-expand-lg position-fixed">
            <a class="navbar-brand" href="#"><b>O K Arjun Studio</b></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">&nbsp;Home&nbsp;</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#Gallery">&nbsp;Gallery&nbsp;</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#Login">&nbsp;Login&nbsp;</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#contact">&nbsp;Contact
                            us&nbsp;</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;