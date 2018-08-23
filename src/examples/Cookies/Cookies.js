import React, { Component } from 'react';

class Cookies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: props.count,
    };
  }

  increment = () => {
    console.log('You got a cookie 👍');

    this.setState({ clicks: this.state.clicks + 1 });
  }

  decrement = () => {
    console.log('You lost a cookie 😢');

    this.setState({ clicks: this.state.clicks - 1 });
  }

  render() {
    return (
      <div>
        <h1>Cookie Counter</h1>
        <p>You have {this.state.clicks} cookies</p>
        <button onClick={this.increment}>🍪 Add Cookie</button>
        <button onClick={this.decrement}>😲 Remove Cookie</button>
      </div>
    );
  }
}

export default Cookies;
