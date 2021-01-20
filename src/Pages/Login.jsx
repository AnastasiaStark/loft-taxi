import React, {useState} from "react";

// import { withAuth } from '../helpers/AutoContext';
import {connect} from 'react-redux'


const Login = ({LogIn, isLoggedIn, changePage}) => {

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

 const authenticate = (event) => {
         event.preventDefault();
        const {email, password} = this.state;

        this.props.logIn(email, password);
    };

        return (
            <>
                {isLoggedIn ? (<button onClick={() => changePage('map')}>Перейти к карте</button>) : (
                    <>
                        <h2>Войти</h2>
                        <form onSubmit={authenticate}>
                            <label htmlFor='email'>
                                Email
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    size='28'
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    placeholder='mail@mail.ru'
                                />
                            </label>
                                <label htmlFor='password'>
                                Email
                                <input
                                    id='password'
                                    type='password'
                                    name='password'
                                    size='28'
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    placeholder='******'
                                />
                            </label>
                            <a href="/">Забыли пароль</a>
                            <button type='submit'>Войти</button>
                        </form>
                        <div>Новый пользователь?</div>
                        <button onClick={() => {this.props.changePage('signUp')}}>Зарегестрируйтесь</button>
                    </>
                    )};
            </>
        );
}
const mapStateToProps = (state) => ({isLoggedIn:state.auth.isLoggedIn})
    export default connect (mapStateToProps)(Login)
