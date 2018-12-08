import './footer.css';
import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <nav className="bottomFixed green lighten-2">
          <a href="#!" className="brand-logo hide-on-med-and-down">BOCK</a>
          <ul className="right hide-on-small-and-down">
            <li><a href="https://pl-pl.facebook.com/BOCKRawicz" className="waves-effect waves-light btn">Facebook <i className="material-icons right">face</i></a></li>
            <li><a href="https://www.youtube.com/channel/UCHfCN5sIMDfbVrQ8lS2tGhA" className="waves-effect waves-light btn">Youtube <i className="material-icons right">movie</i></a></li>
            <li><a href="#!" className="waves-effect waves-light btn">Kontakt <i className="material-icons right">contact_mail</i></a></li>
          </ul>
      </nav>
    );
  }
}
