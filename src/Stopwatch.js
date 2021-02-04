import React, { Component } from 'react'

class Stopwatch extends Component {
  constructor(){
    super()
    this.state = {
      timerInit: 0,
      timerNow: 0,
      isActive: false,
      isPaused: false
    }
    // this.updateSeconds = this.updateSeconds.bind(this)
  }
  // updateSeconds = () =>{
  //   this.setState({
  //     seconds: +this.state.seconds +1
  //   })
  // }
  handleStart = e => {
    // this.setState({ isActive: true})
    // if(this.state.isActive === true){
      this.setState({
          isActive: true,
          timerNow: this.state.timerNow,
          timerInit: Date.now() - this.state.timerNow
        })
      this.timer = setInterval(() => { 
        this.setState({
          timerNow: Math.floor((Date.now() - this.state.timerInit)/1000)})
      }, 1000)
  }
  resetInterval = () => {
    clearInterval(this.timer)
    this.setState((prevState) => ({
      timerNow: prevState.timerNow
    }))
  }
  handlePause = e => {
    if (this.state.isPaused){
      this.handleStart()
    } else{
      this.resetInterval()
    }
    this.setState((prevState) => ({
      isPaused: !this.state.isPaused 
    }))
  }

  render () {
    return (
      <div className="stopwatch">
        <div className="timer-window">
        <h2>{this.state.timerNow}</h2>
        </div>
        <div className="button-area">
          <button name="start" onClick={this.handleStart} value="">Start</button>
          <button name="pause" onClick={this.handlePause} value=""> pause </button>
          <button name="pause"  value=""> reset </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch;
