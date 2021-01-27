import React, {useState} from "react";
import {authanticate} from "../action";
import {connect} from 'react-redux'



const Login = ({logIn, isLoggedIn, changePage}) => {

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

 const authenticate = (event) => {
         event.preventDefault();
         authanticate(email, password);
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
                        <button onClick={() => { changePage('signUp') }}>Зарегестрируйтесь</button>
                    </>
                    )};
            </>
        );
}
const mapStateToProps = (state) => ({isLoggedIn:state.auth.isLoggedIn})
const mapDispatchToProps = {authanticate}
    export default connect(mapStateToProps, mapDispatchToProps)(Login)
