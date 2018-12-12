// home.js
import React, { Component } from 'react';
import { routerMiddleware, push } from 'react-router-redux'
import {Button} from 'react-materialize'
import history from '../history';

import './home.css'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import {Contest} from "../contest/contest"

export class Home extends Component {
  state = {
    competitors: [],
    contests: [],
    listInfo: 0
  };
  handleClick(event, contest){
    this.props.callbackFromParent(contest.id);
    console.log('test_event', contest.id);
    history.push('/zawody');



    }

  async componentDidMount() {
    const auth =  sessionStorage.getItem('jwtToken');
    console.log(auth)

    try {
      const res2 = await fetch('http://127.0.0.1:8000/api/competitors/10/', {
       headers:{
         'Content-Type': 'aplication/jason',
         'Authorization': 'Bearer ' + auth
          },
     });

      const res1 = await fetch('http://127.0.0.1:8000/api/contests/contest/?q=closest');
      const contests = await res1.json();
      this.setState({
        contests
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="bg">
      <div className="container">
        {this.state.contests.map(contest => (
          <div className="row">
            <div className="col s12 m6 l4">
              <div className="card">
                <div className="card-image">
                  <img src={contest.pic}></img>
                  <span className="card-title">{contest.title}</span>
                  //<Route name="zawody" path="zawody/:id" handler={Contest} />
                  <NavLink to={"zawody/?q=" +contest.id}><a className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">input</i></a></NavLink>
                </div>
                <div className="card-content">
                  <p>{contest.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

//export default Home;
