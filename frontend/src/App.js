// App.js
import {BrowserRouter, Route} from 'react-router-dom'
import {Header} from "./header/header";
import {Home} from "./home/home";
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
      <Header />
      <Route path="/" exact render={() => <Home />} />

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
