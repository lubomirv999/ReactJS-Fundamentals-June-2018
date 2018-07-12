import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import observer from '../../infrastructure/observer';

import '../../styles/header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null
        }

        observer.subscribe(observer.events.loginUser, this.userLoggedIn);
    }

    userLoggedIn = username =>
        this.setState({ username });

    render = () => {
        const loggedInSection = (
            <div id="profile">
                <span id="username">Hello, {this.state.username}!</span>|
                <Link to="/logout" id="linkMenuLogout">logout</Link>
            </div>);

        return (
            <header>
                <span className="logo">&#9731;</span><span className="header">SeenIt</span>
                {this.state.username ? loggedInSection : null}
            </header>
        )
    }
}