import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      openIndex: null
    };
  }

  handleClick(event) {
    this.setState({
      isOpen: true,
      openIndex: event.target.id
    });
  }

  render() {
    const topics = this.props.topics;
    const topicStructure =
      topics.map((topic, index) => {
        return (
          <div key={index} >
            <div className="headline" id={index} onClick={this.handleClick} >{topic.title}</div>
            {parseInt(this.state.openIndex) === index &&
              <div className="detail">{topic.detail}</div>}
          </div>
        );
      });

    return (
      <div className="container" >
        { topicStructure}
      </div>
    );
  }
}
