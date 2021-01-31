import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import  Header from './Component/Header'
import Login from './Pages/Login'
import {Map} from './Pages/Map'
import SignUp from './Pages/SignUp'
import {connect} from 'react-redux'
import {Profile} from './Profile'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"


const App = () => {
            return (
                <Router>
                    <Header/>
                    <Route path="/" component ={Login}/>
                    <Route path="/map" component = {Map}/>
                    <Route path="/profile" component = {Profile}/>
                </Router>
            );
        }

export default (App);

