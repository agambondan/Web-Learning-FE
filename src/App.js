import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/navbar";
import CarouselBanner from "./components/layout/carouselBanner";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import Home from "./components/layout/home";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <CarouselBanner/>
                <Switch>
                    <Route path={"/"}><Content/></Route>
                    <Route exact path={"/home.html"}><Home/></Route>
                </Switch>
                <Footer/>
           </Router>
        );
    }
}

export default App;
