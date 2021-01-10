// import PropTypes from 'prop-types';
// import { withAuth } from './helpers/AutoContext';
// import React from "react";
//
//
// const Login = ({LogIn, isLoggedIn, changePage}) => {
//
//     state = {
//         email: '',
//         password: '',
//     }
//
//
//     const authenticate = (event) => {
//         event.preventDefault();
//         const {email, password} = event.target;
//         logIn(email.value, password.value);
//     };
//         render() {
//         const {email, password} = this.state;
//         return (
//             <>
//                 {isLoggedIn ? (<button onClick={() => changePage('map')}>Перейти к карте</button> : (
//                     <>
//                         <h2>Войти</h2>
//                         <form onSubmit={authenticate}>
//                             <label htmlFor='email'>
//                                 Email
//                                 <input
//                                     id='email'
//                                     type='email'
//                                     name='email'
//                                     size='28'
//                                     value={email}
//                                     onChange={event => this.setState({email: event.target.value})}
//                                     placeholder='mail@mail.ru'
//                                 />
//                             </label>
//                             <label htmlFor='password'>
//                                 Email
//                                 <input
//                                     id='password'
//                                     type='password'
//                                     name='password'
//                                     size='28'
//                                     value={password}
//                                     onChange={event => this.setState({password: event.target.value})}
//                                     placeholder='******'
//                                 />
//                             </label>
//                             <a href="/">Забыли пароль</a>
//                             <button type='submit'>Войти</button>
//                         </form>
//                     </>
//                     )};
//             </>
//         );
//     }
// }
//     export default withAuth(Login)
