import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { started: false };
    this.seconds = 0;
    this.tick = this.tick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.resetClock = this.resetClock.bind(this);
  }

  handleClick() {
    this.setState({ started: true });
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  handlePauseClick() {
    this.setState({ started: false });
    clearInterval(this.timerId);
  }

  tick() {
    this.seconds++;
    const element = (
      <div id="time">{this.seconds}</div>
    );
    ReactDOM.render(element, document.getElementById('circle'));
  }

  resetClock() {
    this.seconds = 0;
    const element = (
      <div id="time">{this.seconds}</div>
    );
    if (!this.state.started) {
      ReactDOM.render(element, document.getElementById('circle'));
    }
  }

  render() {
    let togglePlayAndPause;
    const timerStatus = this.state.started;
    if (!timerStatus) {
      togglePlayAndPause = (
        <div>
          <div id="circle" onClick={this.resetClock}>
            <div id="time">0</div>
          </div>
          <div id="center">
            <i className="fas fa-play fa-lg" onClick={() => {
              this.handleClick();
              this.tick();
            }}></i>
          </div>
        </div>
      );
    }
    if (timerStatus) {
      togglePlayAndPause = (
        <div>
          <div id="circle">
            <div id="time">0</div>
          </div>
          <div id="center">
            <i className="fas fa-pause fa-lg" onClick={() => {
              this.handlePauseClick();
            }}></i>
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

ReactDOM.render(<StopWatch />, document.getElementById('root'));
