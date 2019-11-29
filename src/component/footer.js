import * as React from 'react';
import {Link} from "react-router-dom";

class Footer extends React.Component{
    render() {
        return(
            <footer class="footer-area section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3  col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <h6>About Us</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
                                    magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4  col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <h6>Newsletter</h6>
                                <p>Stay update with our latest</p>
                                <div class="" id="mc_embed_signup">

                                    <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                          method="get" class="form-inline">

                                        <div class="d-flex flex-row">

                                            <input class="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
                                                   required="" type="email"/>


                                                <button class="click-btn btn btn-default"><span class="lnr lnr-arrow-right"/></button>
                                                <div style={{position: "absolute", left: "-5000px"}}>
                                                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" value="" type="text"/>
                                                </div>
                                        </div>
                                        <div class="info"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <h6>Follow Us</h6>
                                <p>Let us be social</p>
                                <div class="footer-social d-flex align-items-center">
                                    <Link to="#">
                                        <i class="fab fa-facebook-f"/>
                                    </Link>
                                    <Link to="#">
                                        <i class="fab fa-twitter"/>
                                    </Link>
                                    <Link to="#">
                                        <i class="fab fa-dribbble"/>
                                    </Link>
                                    <Link to="#">
                                        <i class="fab fa-behance"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                        <p class="footer-text m-0">
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"/> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;