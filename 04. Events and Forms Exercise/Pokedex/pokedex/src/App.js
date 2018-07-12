import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import LoggedInScreen from './components/logged-in/LoggedInScreen';

class App extends Component {
  constructor(props) {
    super(props);

    let route = '';
    if (localStorage.getItem('token')) {
      route = 'loggedIn';
    }

    this.state = {
      route: route
    }

    this.showAppropriateComponent = this.showAppropriateComponent.bind(this);
    this.switchLoginSingUp = this.switchLoginSingUp.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this)
  }

  showAppropriateComponent() {
    if (this.state.route === 'login') {
      return <LoginForm setLoggedIn={this.setLoggedIn} />
    } else if (this.state.route === 'loggedIn'){
      return <LoggedInScreen />
    }

      return <SignUpForm />
  }

  switchLoginSingUp() {
    if (this.state.route === 'login') {
      this.setState({ route: '' });
    } else {
      this.setState({ route: 'login' });
    }
  }

  setLoggedIn(){
    this.setState({
      route: 'loggedIn'
    });
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-link" onClick={this.switchLoginSingUp}>Change Login Form</button>
        {this.showAppropriateComponent()}
      </div>
    );
  }
}

export default App;
