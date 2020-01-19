import * as React from "react";
import {Link} from "react-router-dom";
import logo from "../../img/core-img/logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <>
                <div id="preloader">
                    <div className="spinner"/>
                </div>
                <header className="header-area">
                    <div className="clever-main-menu fixed-top">
                        <div className="classy-nav-container breakpoint-off">
                            <nav className="classy-navbar justify-content-between" id="cleverNav">
                                <Link className="nav-brand" to="index.html">
                                    <img src={logo} alt="img"/>
                                </Link>

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
                                            <li><Link to="/home.html">Home</Link></li>
                                            <li><Link to="/courses.html">Courses</Link></li>
                                            <li><Link to="/instructors.html">Instructors</Link></li>
                                            <li><Link to="/blog.html">Blog</Link></li>
                                            <li><Link to="/contact.html">Contact</Link></li>
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
            </>
        )
    }
}

export default Navbar;
