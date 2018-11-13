// App.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    competitors: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const competitors = await res.json();
      this.setState({
        competitors
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.competitors.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <span>{item.surname}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
