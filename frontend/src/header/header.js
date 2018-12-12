// App.js
import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'
export class Header extends Component {
  constructor(props) {
    super(props);
    this.auth= null;
}
handleClick(event){
  console.log(this.auth);
  sessionStorage.removeItem('jwtToken');
}
  render() {
    this.auth =  sessionStorage.getItem('jwtToken');

    if(this.auth == null){
      return (
        <div className='navbar-fixed'>
          <Navbar className='green lighten-2' brand='BOCK Rawicz' right>
          <ul className="right hide-on-small-and-down">
            <li><a href="/zawody" className="waves-effect waves-light btn">Zawody <i className="material-icons right">gps_fixed</i></a></li>
            <li><a href="/kalendarz" className="waves-effect waves-light btn">Kalędarz <i className="material-icons right">event_note</i></a></li>
            <li><a href="/login" className="waves-effect waves-light btn">Zaloguj <i className="material-icons right">person</i></a></li>
          </ul>
          </Navbar>
        </div>
      )
    }
    else{
      return (
        <div className='navbar-fixed'>
          <Navbar className='green lighten-2' brand='BOCK Rawicz' right>
          <ul className="right hide-on-small-and-down">
            <li><a href="/zawody" className="waves-effect waves-light btn">Zawody <i className="material-icons right">gps_fixed</i></a></li>
            <li><a href="/wyniki" className="waves-effect waves-light btn">Wyniki <i className="material-icons right">stars</i></a></li>
            <li><a href="/treningi" className="waves-effect waves-light btn">Treningi <i className="material-icons right">trending_up</i></a></li>
            <li><a href="/kalendarz" className="waves-effect waves-light btn">Kalędarz <i className="material-icons right">event_note</i></a></li>
            <li><a className="waves-effect waves-light btn" onClick={(event) => this.handleClick(event)}>Wyloguj <i className="material-icons right">person</i></a></li>
          </ul>
          </Navbar>
        </div>
      )
    }
  }
}
//export default Header;
