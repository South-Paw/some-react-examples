import React, { Component } from 'react';

import Hello from '../Hello'
import Item from './Item';

class Form extends Component {
  constructor(props) {
    super(props);

    const defaultState = {};

    props.items.forEach(item => defaultState[item.id] = null);

    this.state = { ...defaultState };
  }

  handler = (event, id) => {
    console.log(`⚡ ${id} = ${event.target.value}`);

    this.setState({ [id]: event.target.value });
  }

  makeItem = (item) => {
    const { id, label, type } = item;

    return (
      <Item
        key={id}
        id={id}
        label={label}
        type={type}
        value={this.state[id]}
        handler={e => this.handler(e, id)}
      />
    );
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map(item => this.makeItem(item))}
        {this.state.name && <Hello name={this.state.name} />}
      </div>
    );
  }
}

export default Form;
