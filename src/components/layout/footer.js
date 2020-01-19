import * as React from 'react';
import {Link} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid bg-dark mt-30">
                    <div className="row mmb-15">
                        <div className="col-md-12 py-5">
                            <div className="mb-5 text-center">
                                <Link to="">
                                    <i className="fa fa-facebook fa-lg text-white mr-md-5 mr-3 fa-2x"/>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-twitter fa-lg text-white mr-md-5 mr-3 fa-2x"/>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-google-plus-circle fa-lg text-white mr-md-5 mr-3 fa-2x"/>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-linkedin fa-lg text-white mr-md-5 mr-3 fa-2x"/>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-instagram fa-lg text-white mr-md-5 mr-3 fa-2x"/>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-pinterest fa-lg text-white fa-2x"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12 block-line"/>
                        <div className="col-md-12 text-center py-3 bg-dark text-white">
                            © 2020 Copyright: Nocturnal Code
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;
