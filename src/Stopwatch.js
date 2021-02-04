import React, { Component } from 'react'

class Stopwatch extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
    }
    this.handleStart = this.handleStart.bind(this)
  }
  handleStart = (e) => {
    setInterval (function() {
      let prevCounter = this.state.counter
      let newCounter = prevCounter + 1
      return newCounter
    }, 1000)
    this.setState({
      counter: newCounter
    })
  }
  render () {
    return (
      <div className="stopwatch">
        <div className="timer-window">
        <h2>{this.state.counter}</h2>
        </div>
        <div className="button-area">
          <button name="reset" onclick={(e) => this.handleStart(e)} value=""> </button>
          <button name="start" onclick={"handleclick"} value=""> </button>
          <button name="pause" onclick={"handleclick"} value=""> </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch;
