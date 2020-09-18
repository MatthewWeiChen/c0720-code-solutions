import React from 'react';
import GenerateDetail from './generateDetail';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicked: false,
      title: ''
    };
  }

  handleClick(event) {
    this.setState({
      clicked: true,
      title: event.target.innerHTML
    });
  }

  render() {
    return (
      <div className="container">
        <GenerateDetail topics={this.props.topics} onClick={this.handleClick} />
      </div>
    );
  }
}
