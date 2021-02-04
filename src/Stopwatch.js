import React, { Component } from 'react';
import './Stopwatch.css'

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
            <section className='stopwatch'>
                <h1 style={{ color: this.state.seconds > 0 || this.state.counter ? 'green' : ''}}>{this.state.seconds}</h1>
                <div className='controls'>
                    <button 
                        onClick={this.handleReset}
                        className={this.state.seconds > 0 || this.state.counter ? '' : 'hidden'}
                    >
                        Reset
                    </button>
                    <button 
                        onClick={this.handleStart}
                        className={this.state.seconds > 0 || this.state.counter ? 'hidden' : ''}
                    >
                        Start
                    </button>
                    <button 
                        onClick={this.handlePause}
                        className={this.state.seconds > 0 || this.state.counter ? '' : 'hidden'}
                    >
                        { this.state.paused ? "Restart" : "Pause"}
                    </button>
                </div>
            </section>
        )
    }
}

export default Stopwatch;