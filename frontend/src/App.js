// App.js
import {BrowserRouter, Route} from 'react-router-dom'
import {Header} from "./header/header";
import {Home} from "./home/home";
import {Login} from "./login/login";
import {Loginscreen} from "./login/loginscreen";
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
      <Header />
      <Route path="/" exact render={() => <Home />} />
      <Route path="/login" exact render={() => <Loginscreen />} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
