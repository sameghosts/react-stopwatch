import React, { Component } from 'react'
import Stopwatch from './Stopwatch'
import './App.css';

class App extends Component {
  render () {
    return (
      <div id="container">
        <h1> React Stopwatch </h1>
        <Stopwatch />
      </div>
    )
  }
}

export default App;
