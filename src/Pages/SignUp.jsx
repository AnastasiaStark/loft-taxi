import { withAuth } from '../helpers/AutoContext';
import React, {Component} from 'react';
import {authanticate} from "../action";
import {Link} from 'react-router-dom'

class SighUp extends Component {
    state = {
        email:'',
        password:'',
        userName:''
    }

    authenticate = (event) => {
        event.preventDefault();
        const {email, password} = this.state;

    };

    render() {

        return (
            <>
                <h2>Регистрация</h2>
                <form onSubmit={this.authenticate}>
                    <label htmlFor='email'>
                        Email
                        <input
                            id='email'
                            type='email'
                            name='email'
                            size='28'
                            value={email}
                            onChange={event => this.setState({email: event.target.value})}
                        />
                    </label>
                    <label htmlFor='userName'>Как вас зовут?*
                        <input
                        id='userName'
                        type='userName'
                        name='userName'
                        size='28'
                        value={userName}
                        onChange={event => this.setState({userName: event.target.value})}
                        />
                    </label>
                        <label htmlFor='password'>Пароль?*
                            <input
                                id='password'
                                type='password'
                                name='password'
                                size='28'
                                value={userName}
                                onChange={event => this.setState({password: event.target.value})}
                            />
                        </label>
                    <button type="submit">Зарегестрироваться?</button>
                </form>
                <div>Уже зарегестрированы?</div>
                <Link to='/login'> Зарегестрируйтесь </Link>
                </>

                );
        }
    }

    export default SighUp;

