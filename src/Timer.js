import React, { Component } from "react";
import ReactDOM from "react-dom";
import Time from "./Time.js";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      incrementValue: 0
    };
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    if (!this.state.incrementValue) {
      const incrementValue = setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1
        });
      }, 1000);
      this.setState({
        incrementValue: incrementValue
      });
    } else {
      clearInterval(this.state.incrementValue);
      this.setState({
        incrementValue: undefined
      });
    }
  }

  reset() {
    clearInterval(this.state.incrementValue);
    this.setState({
      seconds: 0
    });
  }

  render() {
    return (
      <div>
        <Time totalSeconds={this.state.seconds} />
        <div className="buttons">
          <input
            className="startButton"
            type="button"
            value="Start"
            onClick={this.start}
          />
          <input
            className="resetButton"
            type="button"
            value="Reset"
            onClick={this.reset}
          />
        </div>
      </div>
    );
  }
}

export default Timer;
