import { NavLink } from "react-router-dom";
import "../assets/css/Nav.css";
export default function Nav() {
    return (
        <div>
            <nav
                id="navbar"
                className="navbar navbar-expand-lg navbar-light bg-light"
            >
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        KID SPORT
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    // className={({ isActive }) =>
                                    //     isActive ? "active" : "nav-link"
                                    // }
                                    className="nav-link"
                                    aria-current="page"
                                    to="/"
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    ABOUT
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/menu">
                                    MENU
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    CONTACT
                                </NavLink>
                            </li>
                            <li className="nav-item social-links">
                                <a className="social-link" href="/#">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a className="social-link" href="/#">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a className="social-link" href="/#">
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                                <a className="social-link" href="/#">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
