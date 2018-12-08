import './footer.css';
import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper green lighten-2">
          <a href="#!" class="brand-logo hide-on-med-and-down">BOCK</a>
          <ul class="right hide-on-small-and-down">
            <li><a href="https://pl-pl.facebook.com/BOCKRawicz" class="waves-effect waves-light btn">Facebook <i class="material-icons right">face</i></a></li>
            <li><a href="https://www.youtube.com/channel/UCHfCN5sIMDfbVrQ8lS2tGhA" class="waves-effect waves-light btn">Youtube <i class="material-icons right">movie</i></a></li>
            <li><a href="#!" class="waves-effect waves-light btn">Kontakt <i class="material-icons right">contact_mail</i></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
