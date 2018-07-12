import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.dataset.name;
        const value = e.target.value;
        const newObj = {};
        newObj[name] = value;

        this.setState({
            form: Object.assign(this.state.form, newObj)
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch(
            'http://localhost:5000/auth/login',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => {
                if (response.success && response.token) {
                    localStorage.setItem('token', response.token);
                    this.props.setLoggedIn();
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <form>
                <h1>Login Form</h1>
                <div className="form-group">
                    <label htmlFor="input-email">Email address</label>
                    <input type="email" data-name="email" onChange={this.handleChange} className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Password</label>
                    <input type="password" data-name="password" onChange={this.handleChange} className="form-control" id="input-password" placeholder="Password" />
                </div>
                <button className="btn btn-primary" type='button' onClick={this.handleSubmit}>Submit</button>
            </form >
        )
    }
}

export default LoginForm;