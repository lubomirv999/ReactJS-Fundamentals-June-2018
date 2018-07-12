import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/common/Header';
import Notification from './components/common/Notification';
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import Logout from './components/user/Logout';

import './App.css';
import './styles/site.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="content">
          <Header />
          <Notification />
          <Route path='/' exact component={Home} />
          <Route path='/catalog' exact component={Catalog} />
          <Route path='/logout' exact component={Logout} />
        </main>
      </div>
    );
  }
}

export default App;
