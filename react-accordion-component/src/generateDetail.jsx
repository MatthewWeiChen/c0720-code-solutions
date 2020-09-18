import React from 'react';

export default class GenerateDetail extends React.Component {
  render() {
    const topics = this.props.topics;
    const topicMap = [];
    topics.forEach(topic => {
      topicMap.push(
        <div key={topic.title}>
          <div className="headline"> {topic.title}</div>
          <div className="detail hidden"> {topic.detail}</div>
        </div >
      );
    });
    return (
      <div>
        {topicMap}
      </div>
    );
  }
}
