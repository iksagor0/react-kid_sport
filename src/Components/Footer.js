// import React from 'react'
import "../assets/css/Footer.css";
export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row g-5 top-container">
                    <div className="col-md-6 col-9 contact">
                        <h6>CONTACT US</h6>
                        <p>
                            23<sup>rd</sup> Avenue n54, Montreal - Canada
                        </p>
                        <p>
                            123-456-789 <a href="/#">www.sushilogo.com</a>
                        </p>
                    </div>

                    <ul className="col-md-6 col-3 links">
                        <li>
                            <a href="/#">About</a>
                        </li>
                        <li>
                            <a href="/#">Team</a>
                        </li>
                        <li>
                            <a href="/#">Join us</a>
                        </li>
                        <li>
                            <a href="/#">Ethic</a>
                        </li>
                    </ul>
                </div>

                <div className="break-line"></div>

                <ul className="social-media-links">
                    <li>
                        <a className="nav-link" href="/#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/#">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
