// App.js
import {BrowserRouter, Route} from 'react-router-dom'
import {Header} from "./header/header";
import {Footer} from "./footer/footer";
import {Home} from "./home/home";
import {Login} from "./login/login";
import {Loginscreen} from "./login/loginscreen";
import {Contest} from "./contest/contest"
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            listDataFromChild: null
        };
    }
  myCallback = (dataFromChild) => {
        this.setState({ listDataFromChild: dataFromChild });
    }
  render() {
    return (
      <BrowserRouter>
      <div>
      <Header />
      <Route path="/" exact render={() => <Home callbackFromParent={this.myCallback}/>} />
      <Route path="/login" exact render={() => <Loginscreen />} />
      <Route path="/zawody" render={() => <Contest />} />
      <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
