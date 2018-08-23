import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <h1>Hi {this.props.name}! 👋</h1>
    );
  }
}

export default Hello;
