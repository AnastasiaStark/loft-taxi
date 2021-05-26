import React  from 'react';
import { Logo } from 'loft-taxi-mui-theme';
import {logOut} from "../action";
import {connect} from "react-redux";
import {useHistory, Link} from "react-router-dom";

const Header = ({logOut}) => {
    const history = useHistory();
    const unauthenticate = () => {
        logOut();
        history.push('/')
    }
    return (
        <header>
            <Logo />
            <nav>
                <ul>
                    <li>
                        <Link to='/map'>Карта</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Профиль</Link>
                    </li>
                    <li>
                        <button onClick={unauthenticate}>Выйти</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
const mapDispatchToProps = {logOut}
export default connect(null, mapDispatchToProps)(Header)

