// App.js
import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'
export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className='green lighten-2' brand='logo' right>
          <NavItem onClick={() => console.log('test click')}>Zawody</NavItem>
          <NavItem onClick={() => console.log('test click')}>Kalędarz</NavItem>
          <NavItem onClick={() => console.log('test click')}>Treningi</NavItem>
          <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
      </div>
    );
  }
}
//export default Header;
