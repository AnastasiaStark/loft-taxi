import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAuth } from './helpers/AutoContext';

class Header extends React.Component {

    static PropTypes = {changePage: PropTypes.func};


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
                            }}>выйти
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

export default withAuth(Header);
