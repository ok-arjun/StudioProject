import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer bg-light">
            <div className="py-5 mt-5 mb-0">
                <ul class="list-inline d-flex justify-content-center">
                    <li class="list-inline-item "><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram fa-2x"></i></a></li>
                </ul>
            </div>
            <div class="bg-light">
                <div class="text-center">
                    <p class="text-muted mt-0 py-2">© 2019 Bootstrapious All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;