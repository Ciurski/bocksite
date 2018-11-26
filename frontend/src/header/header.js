// App.js
import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'
export class Header extends Component {
  render() {
    return (
      <div className='navbar-fixed'>
        <Navbar className='green lighten-2' brand='BOCK Rawicz' right>
          <NavItem onClick={() => console.log('test click')}>Zawody</NavItem>
          <NavItem onClick={() => console.log('test click')}>Kalędarz</NavItem>
          <NavItem onClick={() => console.log('test click')}>Treningi</NavItem>
          <NavItem onClick={() => console.log('test click')}>Login</NavItem>
        </Navbar>
      </div>
    );
  }
}
//export default Header;
