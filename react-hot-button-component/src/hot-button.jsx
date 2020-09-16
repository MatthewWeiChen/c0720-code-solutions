import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCounter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const currentCounter = this.state.clickCounter;
    let button;
    if (currentCounter < 3) {
      button = <button onClick={this.handleClick}>Hot Button</button>;
    }
    if (currentCounter >= 3 && currentCounter < 6) {
      button = <button onClick={this.handleClick} id='first-3-clicks'>
        Hot Button
      </button >;
    }
    if (currentCounter >= 6 && currentCounter < 9) {
      button = <button onClick={this.handleClick} id='first-6-clicks'>
        Hot Button
      </button >;
    }
    if (currentCounter >= 9 && currentCounter < 12) {
      button = <button onClick={this.handleClick} id='first-9-clicks'>
        Hot Button
      </button >;
    }
    if (currentCounter >= 12 && currentCounter < 15) {
      button = <button onClick={this.handleClick} id='first-12-clicks'>
        Hot Button
      </button >;
    }
    if (currentCounter >= 15 && currentCounter < 18) {
      button = <button onClick={this.handleClick} id='first-15-clicks'>
        Hot Button
      </button >;
    }
    if (currentCounter >= 18) {
      button = <button onClick={this.handleClick} id='first-18-clicks'>
        Hot Button
      </button >;
    }
    return (
      <div>
        {button}
      </div>
    );
  }

  handleClick() {
    this.setState({ clickCounter: this.state.clickCounter + 1 });
  }
}
