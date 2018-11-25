// App.js
import React, { Component } from 'react';
import {Button, Navbar, NavItem} from 'react-materialize'
class App extends Component {
  state = {
    competitors: []
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
  }

  render() {
    return (
      <div>
        <Navbar className='green lighten-2' brand='logo' right>
          <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>

        {this.state.competitors.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <span>{item.surname}</span>
            <p></p>
            <span>{item.license}</span>
          </div>
        ))}
        <Button floating large className='red' waves='light' icon='add' />
      </div>
    );
  }
}

export default App;
