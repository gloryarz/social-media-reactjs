import React, { Component } from 'react';
import logo from './beeMom.svg';

class Logo extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BeeMom</h1>
        </header>
      </div>
    );
  }
}

export default Logo;
