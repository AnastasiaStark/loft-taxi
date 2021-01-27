import React, {useState} from "react";
import {authanticate} from "../action";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Login = ({logIn, isLoggedIn}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const authenticate = (event) => {
        event.preventDefault();
        logIn(email, password);
    };

    return (
        <>
            {isLoggedIn ? (<Link to='map'>Перейти к карте</Link>) : (
                <>
                    <h2>Войти</h2>
                    <form onSubmit={authenticate}>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            type='email'
                            name='email'
                            size='28'
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            placeholder='mail@mail.ru'
                        />

                        <label htmlFor='password'>Email</label>
                        <input
                            id='password'
                            type='password'
                            name='password'
                            size='28'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            placeholder='******'
                        />

                        <Link to="/">Забыли пароль</Link>
                        <button type='submit'>Войти</button>
                    </form>
                    <div>Новый пользователь?</div>
                    <Link to='/signUp' >Зарегестрируйтесь</Link>
                </>
            )}
        </>
    );
};


const mapStateToProps = (state) => ({isLoggedIn:state.auth.isLoggedIn})
const mapDispatchToProps = {logIn: authanticate}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
