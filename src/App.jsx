import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"

import Header from './Component/Header'
import Login from './pages/Login'
import Map from './pages/Map'
import Profile from './pages/Profile'
import './App.css';

const App = () => {
    return (
        <Router>
            <Header/>
            <Route exact path="/" component={Login} />
            <Route path="/map" component={Map} />
            <Route path="/profile" component={Profile} />
        </Router>
    );
}

export default App;

