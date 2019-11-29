import * as React from 'react';
import {Link} from "react-router-dom";

class Sidebar extends React.Component {
    render() {
        return (
            <div class="col-lg-4 sidebar-widgets">
                <div class="widget-wrap">
                    <div class="single-sidebar-widget newsletter-widget">
                        <h4 class="single-sidebar-widget__title">Newsletter</h4>
                        <div class="form-group mt-30">
                            <div class="col-autos">
                                <input type="text" class="form-control" id="inlineFormInputGroup"
                                       placeholder="Enter email" onfocus="this.placeholder = ''"
                                       onblur="this.placeholder = 'Enter email'"/>
                            </div>
                        </div>
                        <button class="bbtns d-block mt-20 w-100">Subcribe</button>
                    </div>

                    <div class="single-sidebar-widget post-category-widget">
                        <h4 class="single-sidebar-widget__title">Catgory</h4>
                        <ul class="cat-list mt-20">
                            <li>
                                <Link to=""  class="d-flex justify-content-between">
                                    <p>Technology</p>
                                    <p>(03)</p>
                                </Link>
                            </li>
                            <li>
                                <Link to=""  class="d-flex justify-content-between">
                                    <p>Software</p>
                                    <p>(09)</p>
                                </Link>
                            </li>
                            <li>
                                <Link to=""  class="d-flex justify-content-between">
                                    <p>Lifestyle</p>
                                    <p>(12)</p>
                                </Link>
                            </li>
                            <li>
                                <Link to=""  class="d-flex justify-content-between">
                                    <p>Shopping</p>
                                    <p>(02)</p>
                                </Link>
                            </li>
                            <li>
                                <Link to=""  class="d-flex justify-content-between">
                                    <p>Food</p>
                                    <p>(10)</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div class="single-sidebar-widget popular-post-widget">
                        <h4 class="single-sidebar-widget__title">Popular Post</h4>
                        <div class="popular-post-list">
                            <div class="single-post-list">
                                <div class="thumb">
                                    <img class="card-img rounded-0" src="img/blog/thumb/thumb1.png" alt=""/>
                                    <ul class="thumb-info">
                                        <li><Link to="" >Adam Colinge</Link></li>
                                        <li><Link to="" >Dec 15</Link></li>
                                    </ul>
                                </div>
                                <div class="details mt-20">
                                    <Link to="blog-single.html">
                                        <h6>Accused of assaulting flight attendant miktake alaways</h6>
                                    </Link>
                                </div>
                            </div>
                            <div class="single-post-list">
                                <div class="thumb">
                                    <img class="card-img rounded-0" src="img/blog/thumb/thumb2.png" alt=""/>
                                    <ul class="thumb-info">
                                        <li><Link to="" >Adam Colinge</Link></li>
                                        <li><Link to="" >Dec 15</Link></li>
                                    </ul>
                                </div>
                                <div class="details mt-20">
                                    <Link to="blog-single.html">
                                        <h6>Tennessee outback steakhouse the
                                            worker diagnosed</h6>
                                    </Link>
                                </div>
                            </div>
                            <div class="single-post-list">
                                <div class="thumb">
                                    <img class="card-img rounded-0" src="img/blog/thumb/thumb3.png" alt=""/>
                                    <ul class="thumb-info">
                                        <li><Link to="" >Adam Colinge</Link></li>
                                        <li><Link to="" >Dec 15</Link></li>
                                    </ul>
                                </div>
                                <div class="details mt-20">
                                    <Link to="blog-single.html">
                                        <h6>Tennessee outback steakhouse the
                                            worker diagnosed</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="single-sidebar-widget tag_cloud_widget">
                        <h4 class="single-sidebar-widget__title">Popular Post</h4>
                        <ul class="list">
                            <li>
                                <Link to="" >project</Link>
                            </li>
                            <li>
                                <Link to="" >love</Link>
                            </li>
                            <li>
                                <Link to="" >technology</Link>
                            </li>
                            <li>
                                <Link to="" >travel</Link>
                            </li>
                            <li>
                                <Link to="" >software</Link>
                            </li>
                            <li>
                                <Link to="" >life style</Link>
                            </li>
                            <li>
                                <Link to="" >design</Link>
                            </li>
                            <li>
                                <Link to="" >illustration</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar;