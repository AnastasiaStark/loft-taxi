import React, {Component} from 'react';
import {connect} from 'react-redux'
import {logOut} from "./action";

export class Profile extends Component {
    unauthenticate = () => {
        this.props.logOut();
        this.props.changePage('login')
    };
    render() {
        return (
        <p>
            Profile.<button onClick={this.unauthenticate}>Log Out</button>
        </p>
        )
    };
}
const mapDispatchToProps = {logOut}
export default connect (null, mapDispatchToProps) (Profile)
