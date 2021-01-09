import PropTypes from 'prop-types';
import { withAuth } from './helpers/AutoContext';
import React from "react";


const Login = ({LogIn, isLoggedIn, changePage}) =>{

    state = {
        email: '',
        password: '',
    }
    static PropTypes = {
        changePage: PropTypes.func
    }

    authenticate = (event) => {
        event.preventDefault();
        const {email, password} = event.target;
        this.props.logIn(email.value, password.value);
    }

    render() {
        const {email, password} = this.state;
        return (
            <>
                <>
                    <h2>Войти</h2>
                    <form onSubmit={this.authenticate}>
                        <label htmlFor='email'>
                            Email
                            <input
                                id='email'
                                type='email'
                                name='email'
                                size='28'
                                value={email}
                                onChange = { event => this.setState({email:event.target.value})}
                                placeholder='mail@mail.ru'
                        </label>
                    </form>
                    )
                    }
                    }

