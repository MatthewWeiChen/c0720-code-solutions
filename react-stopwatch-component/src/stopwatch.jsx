import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      started: false,
      seconds: 0
    };
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.resetClock = this.resetClock.bind(this);
  }

  handleClick() {
    this.timerId = setInterval(() => {
      this.setState({
        started: true,
        seconds: this.state.seconds + 1
      });
    }, 1000);
  }

  handlePauseClick() {
    this.setState({
      started: false
    });
    clearInterval(this.timerId);
  }

  resetClock() {
    this.setState({
      seconds: 0
    });
  }

  render() {
    let togglePlayAndPause;
    const timerStatus = this.state.started;
    const countTimer = this.state.seconds;
    togglePlayAndPause = (
      <div>
        <div id="circle" onClick={this.resetClock}>
          <div id="time">{countTimer}</div>
        </div>
        <div id="center">
          <i className="fas fa-play fa-lg" onClick={() => {
            this.handleClick();
          }}></i>
        </div>
      </div>
    );
    if (timerStatus) {
      togglePlayAndPause = (
        <div>
          <div id="circle">
            <div id="time">{countTimer}</div>
          </div>
          <div id="center">
            <i className="fas fa-pause fa-lg" onClick={this.handlePauseClick}></i>
          </div>
        </div>
      );
    }
    return (
      <div>
        { togglePlayAndPause}
      </div>
    );
  }
}
