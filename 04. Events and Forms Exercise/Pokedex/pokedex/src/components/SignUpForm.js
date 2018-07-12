import React, { Component } from 'react'

class SignUpForm extends Component {
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
            'http://localhost:5000/auth/signup',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => console.log(response));
    }

    render() {
        return (
            <form>
                <h1>SignUp Form</h1>
                <div className="form-group">
                    <label htmlFor="input-email">Email address</label>
                    <input type="email" data-name="email" onChange={this.handleChange} className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Password</label>
                    <input type="password" data-name="password" onChange={this.handleChange} className="form-control" id="input-password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="input-username">Username</label>
                    <input type="text" data-name="name" onChange={this.handleChange} className="form-control" id="input-username" placeholder="Username" />
                </div>
                <button className="btn btn-primary" type='button' onClick={this.handleSubmit}>Submit</button>
            </form >
        )
    }
}

export default SignUpForm;