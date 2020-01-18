import * as React from "react";
import {Link} from "react-router-dom";
import logo from "../style/img/core-img/logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <header className="header-area">
                <div className="top-header-area d-flex justify-content-between align-items-center">
                    <div className="contact-info">
                        <Link to="#"><span>Phone:</span> +44 300 303 0266</Link>
                        <Link to="#"><span>Email:</span> info@clever.com</Link>
                    </div>
                    <div className="follow-us">
                        <span>Follow us</span>
                        <Link to="#"><i className="fa fa-facebook" aria-hidden="true"/></Link>
                        <Link to="#"><i className="fa fa-instagram" aria-hidden="true"/></Link>
                        <Link to="#"><i className="fa fa-twitter" aria-hidden="true"/></Link>
                    </div>
                </div>

                <div className="clever-main-menu">
                    <div className="classy-nav-container breakpoint-off">
                        <nav className="classy-navbar justify-content-between" id="cleverNav">
                            <Link className="nav-brand" to="index.html">
                                <img src={logo} alt=""/></Link>

                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span/><span/><span/></span>
                            </div>

                            <div className="classy-menu">

                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top"/><span
                                        className="bottom"/></div>
                                </div>

                                <div className="classynav">
                                    <ul>
                                        <li><Link to="index.html">Home</Link></li>
                                        <li><Link to="courses.html">Courses</Link></li>
                                        <li><Link to="instructors.html">Instructors</Link></li>
                                        <li><Link to="blog.html">Blog</Link></li>
                                        <li><Link to="contact.html">Contact</Link></li>
                                    </ul>

                                    <div className="search-area">
                                        <form action="#" method="post">
                                            <input type="search" name="search" id="search" placeholder="Search"/>
                                            <button type="submit"><i className="fa fa-search" aria-hidden="true"/>
                                            </button>
                                        </form>
                                    </div>

                                    <div className="register-login-area">
                                        <Link to="#" className="btn">Register</Link>
                                        <Link to="index-login.html" className="btn active">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;