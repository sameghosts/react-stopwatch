import React, { Component } from 'react'
import Stopwatch from './Stopwatch'
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="stopwatch">
        <div className="timer-window">
        <h2>StopWatch Values</h2>
        </div>
        <div className="button-area">
          Buttons
        </div>
      </div>
    )
  }
}

export default App;
