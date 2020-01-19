import * as React from "react";
import {Link} from "react-router-dom";

class CarouselBanner extends React.Component {
    render() {
        var bg =require("../../img/bg-img/bg1.jpg");
        return (
            <section className="hero-area bg-img bg-overlay-2by5 mb-30"
                     style={{backgroundImage: "url(" +bg+")"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="hero-content text-center">
                                <h2>Let's Study Together</h2>
                                <Link to="" className="btn clever-btn">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CarouselBanner;
