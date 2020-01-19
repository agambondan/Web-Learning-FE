import * as React from 'react';
import {Link} from "react-router-dom";
import bg1 from "../../img/blog-img/1.jpg";
import bg2 from "../../img/blog-img/2.jpg";
import bg3 from "../../img/blog-img/3.jpg";
import bg4 from "../../img/blog-img/4.jpg";

class Content extends React.Component {
    render() {
        return (
            <div className="col-lg-8">
                <div className="single-recent-blog-post">
                    <div className="thumb">
                        <img className="img-fluid" src={bg1} alt=""/>
                        <ul className="thumb-info">
                            <li><Link to="#"><i className="ti-user"/>Admin</Link></li>
                            <li><Link to="#"><i className="ti-notepad"/>January 12,2019</Link></li>
                            <li><Link to="#"><i className="ti-themify-favicon"/>2 Comments</Link></li>
                        </ul>
                    </div>
                    <div className="details mt-20">
                        <Link to="blog-single.html">
                            <h3>Woman claims husband wants to name baby girl
                                after his ex-lover sparking.</h3>
                        </Link>
                        <p className="tag-list-inline">Tag: <Link to="#">travel</Link>, <Link to="#">life
                            style</Link>, <Link to="#">technology</Link>, <Link to="#">fashion</Link></p>
                        <p>Over yielding doesn't so moved green saw meat hath fish he him from given
                            yielding lesser cattle were fruitful lights. Given let have, lesser their made
                            him above gathered dominion sixth. Creeping deep said can't called second. Air
                            created seed heaven sixth created living</p>
                        <Link className="button" href="#">Read More <i className="ti-arrow-right"/></Link>
                    </div>
                </div>

                <div className="single-recent-blog-post">
                    <div className="thumb">
                        <img className="img-fluid" src={bg2} alt=""/>
                        <ul className="thumb-info">
                            <li><Link to="#"><i className="ti-user"/>Admin</Link></li>
                            <li><Link to="#"><i className="ti-notepad"/>January 12,2019</Link></li>
                            <li><Link to="#"><i className="ti-themify-favicon"/>2 Comments</Link></li>
                        </ul>
                    </div>
                    <div className="details mt-20">
                        <Link to="blog-single.html">
                            <h3>Woman claims husband wants to name baby girl
                                after his ex-lover sparking.</h3>
                        </Link>
                        <p className="tag-list-inline">Tag: <Link to="#">travel</Link>, <Link to="#">life
                            style</Link>, <Link to="#">technology</Link>, <Link to="#">fashion</Link></p>
                        <p>Over yielding doesn't so moved green saw meat hath fish he him from given
                            yielding lesser cattle were fruitful lights. Given let have, lesser their made
                            him above gathered dominion sixth. Creeping deep said can't called second. Air
                            created seed heaven sixth created living</p>
                        <Link className="button" href="#">Read More <i className="ti-arrow-right"/></Link>
                    </div>
                </div>

                <div className="single-recent-blog-post">
                    <div className="thumb">
                        <img className="img-fluid" src={bg3} alt=""/>
                        <ul className="thumb-info">
                            <li><Link to="#"><i className="ti-user"/>Admin</Link></li>
                            <li><Link to="#"><i className="ti-notepad"/>January 12,2019</Link></li>
                            <li><Link to="#"><i className="ti-themify-favicon"/>2 Comments</Link></li>
                        </ul>
                    </div>
                    <div className="details mt-20">
                        <Link to="blog-single.html">
                            <h3>Tourist deaths in Costa Rica jeopardize safe dest
                                ination reputation all time. </h3>
                        </Link>
                        <p className="tag-list-inline">Tag: <Link to="#">travel</Link>, <Link to="#">life
                            style</Link>, <Link to="#">technology</Link>, <Link to="#">fashion</Link></p>
                        <p>Over yielding doesn't so moved green saw meat hath fish he him from given
                            yielding lesser cattle were fruitful lights. Given let have, lesser their made
                            him above gathered dominion sixth. Creeping deep said can't called second. Air
                            created seed heaven sixth created living</p>
                        <Link className="button" href="#">Read More <i className="ti-arrow-right"/></Link>
                    </div>
                </div>

                <div className="single-recent-blog-post">
                    <div className="thumb">
                        <img className="img-fluid" src={bg4} alt=""/>
                        <ul className="thumb-info">
                            <li><Link to="#"><i className="ti-user"/>Admin</Link></li>
                            <li><Link to="#"><i className="ti-notepad"/>January 12,2019</Link></li>
                            <li><Link to="#"><i className="ti-themify-favicon"/>2 Comments</Link></li>
                        </ul>
                    </div>
                    <div className="details mt-20">
                        <Link to="blog-single.html">
                            <h3>Tourist deaths in Costa Rica jeopardize safe dest
                                ination reputation all time. </h3>
                        </Link>
                        <p className="tag-list-inline">Tag: <Link to="#">travel</Link>, <Link to="#">life
                            style</Link>, <Link to="#">technology</Link>, <Link to="#">fashion</Link></p>
                        <p>Over yielding doesn't so moved green saw meat hath fish he him from given
                            yielding lesser cattle were fruitful lights. Given let have, lesser their made
                            him above gathered dominion sixth. Creeping deep said can't called second. Air
                            created seed heaven sixth created living</p>
                        <Link className="button" to="#">Read More <i className="ti-arrow-right"/></Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <nav className="blog-pagination justify-content-center d-flex">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link to="#" className="page-link" aria-label="Previous">
                                  <span aria-hidden="true">
                                      <i className="ti-angle-left"/>
                                  </span>
                                    </Link>
                                </li>
                                <li className="page-item active"><Link to="#" className="page-link">1</Link>
                                </li>
                                <li className="page-item"><Link to="#" className="page-link">2</Link></li>
                                <li className="page-item">
                                    <Link to="#" className="page-link" aria-label="Next">
                                  <span aria-hidden="true">
                                      <i className="ti-angle-right"/>
                                  </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;
