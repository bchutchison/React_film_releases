import React, { Component } from 'react';

class Film extends Component {



render() {
  return (
    <ul>
     <li><a href={this.props.link}>{this.props.film}</a></li>
    </ul>
  )
}


}

export default Film;
