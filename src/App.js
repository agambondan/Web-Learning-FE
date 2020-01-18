import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./component/navbar";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navbar/>

            </Router>
        );
    }
}

export default App;
