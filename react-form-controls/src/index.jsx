/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <h1>Email
        <form onSubmit={this.handleSubmit}>
          <input type="email" onChange={this.handleChange} value={this.state.email}></input>
          <button >Sign Up</button>
        </form>
      </h1>
    );
  }
}

ReactDOM.render(<NewsletterForm />, document.getElementById('root'));
