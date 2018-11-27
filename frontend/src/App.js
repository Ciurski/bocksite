// App.js
import {Header} from "./header/header";
import React, { Component } from 'react';
import {Button} from 'react-materialize'
class App extends Component {
  state = {
    competitors: [],
    contests: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/competitors/');
      const competitors = await res.json();
      this.setState({
        competitors
      });
    } catch (e) {
      console.log(e);
    }
    try {
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
      <div>
      <Header />
  
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

        {this.state.competitors.map(competitor => (
          <div key={competitor.id}>
            <h1>{competitor.name}</h1>
            <span>{competitor.surname}</span>
            <p></p>
            <span>{competitor.license}</span>
          </div>
        ))}
        <Button floating large className='red' waves='light' icon='add' />
      </div>
      </div>
    );
  }
}

export default App;
