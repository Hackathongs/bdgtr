import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>Hello, Reacts! HI STEVEN!</p>
        <Header />
      </div>
    );
  }
}
