// home.js
import React, { Component } from 'react';
import {Button} from 'react-materialize'
export class Home extends Component {
  state = {
    competitors: [],
    contests: []
  };

  async componentDidMount() {
    const auth =  sessionStorage.getItem('jwtToken');
    console.log(auth)
    try {
      const res2 = await fetch('http://127.0.0.1:8000/api/competitors/10/', {
       method: 'GET',
       headers:{
          'Authorization': 'Bearer ' + auth
          },
     });

      const res1 = await fetch('http://127.0.0.1:8000/api/contests/contest/');
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
      <div className="container">
        {this.state.contests.map(contest => (
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src={contest.pic}></img>
                  <span className="card-title">{contest.title}</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">input</i></a>
                </div>
                <div className="card-content">
                  <p>{contest.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}


      </div>
    );
  }
}

//export default Home;
