import React, { Component } from 'react';

import About from './About';
import LoginForm from '../user/LoginForm';
import RegisterForm from '../user/RegisterForm';

import '../../styles/submit.css';

export default class Home extends Component {
    render = () => {
        return (
            <section id="viewSignIn">
                <div className="welcome">
                    <div className="signup">
                        <LoginForm {...this.props}/>
                        <RegisterForm />
                    </div>
                    <About />
                </div>
            </section>
        )
    }
}