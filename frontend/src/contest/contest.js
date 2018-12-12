import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
var query = window.location.search.substring(1);
console.log(query)
export class Contest extends Component {
  render() {
    return (
      <div>
          
           <p>User id: {query}</p>
      </div>
    )
  }
}
