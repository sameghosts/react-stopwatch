import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor() {
        super()
        this.state = {
            counter: null,
            paused: false,
            seconds: 0
        }
    }
    updateTime = () => {
        this.setState({
            seconds: this.state.seconds + 1
        })
    }

    resetInterval = () => {
        clearInterval(this.state.counter)
        this.setState({
            counter: null,
        })
    }

    handleStart = e => {
        this.setState({counter: setInterval(this.updateTime, 1000)})
    }

    handleReset = e => {
        this.resetInterval()
        this.setState({
            seconds: 0,
            paused: false
        })
    }

    handlePause = e => {
        // restarting timer
        if (this.state.paused) {
            this.handleStart()
        } else {
            this.resetInterval()
        }
        this.setState({
            paused: !this.state.paused
        })
    }

    render() {
        return (
            <main className='stopwatch'>
                <h1>{this.state.seconds}</h1>
                <div className='controls'>
                    <button 
                        onClick={this.handleReset}
                        disabled={this.state.seconds > 0 || this.state.counter ? false : true}
                    >
                        Reset
                    </button>
                    <button 
                        onClick={this.handleStart}
                        disabled={this.state.seconds > 0 || this.state.counter ? true : false}
                    >
                        Start
                    </button>
                    <button 
                        onClick={this.handlePause}
                        disabled={this.state.seconds > 0 || this.state.counter ? false : true}
                    >
                        { this.state.paused ? "Restart" : "Pause"}
                    </button>
                </div>
            </main>
        )
    }
}

export default Stopwatch;