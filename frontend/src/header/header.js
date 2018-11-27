// App.js
import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'
export class Header extends Component {
  render() {
    return (
      <div className='navbar-fixed'>
        <Navbar className='green lighten-2' brand='BOCK Rawicz' right>
          <NavItem href="/zawody">Zawody</NavItem>
          <NavItem href="/kalendarz">Kalędarz</NavItem>
          <NavItem href="/treningi">Treningi</NavItem>
          <NavItem href="/login">Login</NavItem>
        </Navbar>
      </div>
    );
  }
}
//export default Header;
