import React, { Component } from 'react'

class Stopwatch extends Component {
  constructor(){
    super()
    this.state = {
      seconds: 0,
      counter: null,
      isActive: false,
      isPaused: false
    }
    // this.updateSeconds = this.updateSeconds.bind(this)
  }
  updateSeconds = () =>{
    this.setState({
      seconds: this.state.seconds +1
    })
  }
  handleStart = e => {
    // this.setState({ isActive: true})
    // if(this.state.isActive === true){
      this.setState({
          isActive: !this.state.isActive,
          counter: setInterval(this.updateSeconds, 1000)
        })
  }
  resetInterval = () => {
    clearInterval(this.state.counter)
    this.setState({
      counter: null
    })
  }
  handlePause = e => {
    if (this.state.isPaused){
      this.handleStart()
    } else{
      this.resetInterval()
    }
    this.setState({
      isActive: !this.state.isActive,
      isPaused: !this.state.isPaused 
    })
  }
  
  handleReset = () => {
    this.resetInterval()
    this.setState({
      seconds: 0,
      isPaused: false
    })
  }

  render () {
    return (
      <div className="stopwatch">
        <div className="timer-window">
        <h2>{this.state.seconds}</h2>
        </div>
        <div className="button-area">
          <button className="pause"  onClick={this.handleReset} disabled={this.state.seconds > 0 || this.state.counter ? false : true}> Reset </button>
          <button className="start" onClick={this.handleStart} disabled={this.state.seconds > 0 || this.state.counter ? true : false}>Start</button>
          <button className="pause" onClick={this.handlePause} disabled={this.state.seconds >0 || this.state.counter ? false : true}> {this.state.isPaused ? "Restart" : "Pause"} </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch;
