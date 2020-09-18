import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      correct: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.hideError = this.hideError.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    const passwordCheck = RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&()?]).{8,}$');
    const password = event.target.value;
    if (passwordCheck.test(password)) {
      this.setState({ correct: true });
    }
  }

  hideError() {
    if (this.state.correct) return 'hide';
  }

  changeIcon() {
    if (!this.state.correct) return 'fa-times error';
    if (this.state.correct) return 'fa-check correct';
  }

  render() {
    const getIcon = this.changeIcon();
    const hide = this.hideError();
    return (
      <form>
        <h1>Password</h1>
        <input type="password"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="must include digit, capital letter, special character"
        />
        <i className={`fas fa-lg add-space ${getIcon}`}></i>
        <div className={`error status-size ${hide}`}>A password is required.</div>
      </form >
    );
  }
}
