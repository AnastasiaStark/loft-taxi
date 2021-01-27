import React, { Component } from 'react';
import { Logo } from 'loft-taxi-mui-theme';
import PropTypes from 'prop-types';
import { withAuth } from '../helpers/AutoContext';
import {logOut} from "../action";
import {connect} from "react-redux";

class Header extends Component {

    static propTypes = {
        changePage: PropTypes.func
    };


    unauthenticate = () => {
        this.props.logOut();
        this.props.changePage('login');
    }

    render() {
        return (
            <header>
                <Logo />
                <nav>
                    <ul>
                        <li>
                            <button onClick={() => {
                                this.props.changePage('map')
                            }}>Карта
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                this.props.changePage('profile')
                            }}>Профиль
                            </button>
                        </li>
                        <li>
                            <button onClick={this.unauthenticate}>Выйти</button>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
const mapStateToProps = (state) => ({isLoggedIn:state.auth.isLoggedIn})
const mapDispatchToProps = {logOut}
export default connect(mapStateToProps, mapDispatchToProps)(Header)

