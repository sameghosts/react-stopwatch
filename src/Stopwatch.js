import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    handleStart = e => {
        setInterval(() => this.setState({
            counter: this.state.counter + 1
        }), 1000)
    }

    render() {
        return (
            <main className='stopwatch'>
                <h1>{this.state.counter}</h1>
                <div className='controls'>
                    <button>Reset</button>
                    <button onClick={this.handleStart}>Start</button>
                    <button>Pause</button>
                </div>
            </main>
        )
    }
}

export default Stopwatch;