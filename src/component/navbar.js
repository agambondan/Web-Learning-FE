import * as React from "react";
import header from '../style/img/logo.png';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container box_1620">
                            <Link className="navbar-brand logo_h" to="">
                                <img src={header} alt=""/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav justify-content-center">
                                    <li className="nav-item active">
                                        <Link to="" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">Archive</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">Category</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">Pages</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <ul className="nav navbar-nav navbar-right navbar-social">
                                <li><Link to=""><i className="fab fa-facebook-f"/></Link></li>
                                <li><Link to=""><i className="fab fa-twitter"/></Link></li>
                                <li><Link to=""><i className="fab fa-instagram"/></Link></li>
                                <li><Link to=""><i className="fab fa-skype"/></Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar;