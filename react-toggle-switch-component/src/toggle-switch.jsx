import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: false });
    if (!this.state.isOn) {
      this.setState({ isOn: true });
    }
  }

  render() {
    let toggleSwitchButton;
    const switchStatus = this.state.isOn;
    if (switchStatus) {
      toggleSwitchButton = (
        <div id="square">
          <div onClick={this.handleClick} id="circle"></div>
        </div>
      );
    }
    if (!switchStatus) {
      toggleSwitchButton = (
        <div id="square-off">
          <div onClick={this.handleClick} id="circle-off"></div>
        </div>
      );
    }
    return (
      <div>
        {toggleSwitchButton}
      </div>
    );
  }
}
