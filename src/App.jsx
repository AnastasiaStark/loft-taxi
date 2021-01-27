import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import  Header from './Component/Header'
// import { withAuth } from './helpers/AutoContext';
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


class App extends React.Component {

    // eslint-disable-next-line react/no-typos
    static propTypes = {currentPage: PropTypes.string};

    state = {currentPage: 'login'}
    navigateTo = (page) => {
        if (this.props.isLoggedIn) {
            this.setState({currentPage: page});
                } else if (page === 'signUp') {
                    this.setState({currentPage: 'sighUp'})
                } else {
                    this.setState({currentPage: 'login'})
                }
        };

        render()
        {
            return (
                // <div className='wrapper'>
                //     <Header changePage={this.navigateTo} />
                //     {this.state.currentPage === 'login' && <Login changePage={this.navigateTo}/>}
                //     {this.state.currentPage === 'signUp' && <SignUp changePage={this.navigateTo}/>}
                //     {this.state.currentPage === 'profile' && <Profile changePage={this.navigateTo}/>}
                //     {this.state.currentPage === 'map' && <Map changePage={this.navigateTo}/>}
                // </div>
                <Router>
                    <Header changePage={this.navigateTo}/>
                    <Route path="/login">
                        <Login changePage={this.navigateTo}/>
                    </Route>
                    <Route path="/map">
                        <Map changePage={this.navigateTo}/>
                    </Route>
                    <Route path="/profile">
                        <Profile changePage={this.navigateTo}/>
                    </Route>
                </Router>
            );
        }
    }

export default connect(
    state => ({isLoggedIn:state.auth.isLoggedIn})
)(App);

