import React from 'react';

export default class MenuOptions extends React.Component {

  render() {
    return (
      <div id="menu-square">
        <h1 onClick={this.props.onClick}>Menu</h1>
        <h2 onClick={this.props.onClick}>About</h2>
        <h2 onClick={this.props.onClick}>Get Started</h2>
        <h2 onClick={this.props.onClick}>Sign In</h2>
      </div>
    );
  }
}
