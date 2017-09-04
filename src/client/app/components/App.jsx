import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import "../app.css"
import PrimaryData from './PrimaryData';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
      <div>
        <Header/>
        </div>
        <div>
        <PrimaryData/>
        </div>

        </div>
      
    );
  }
}
