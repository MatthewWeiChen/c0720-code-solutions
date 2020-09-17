import React from 'react';
import MenuOptions from './menu-options';

export default class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { closed: true };
    this.handleClick = this.handleClick.bind(this);
    this.changeToHidden = this.changeToHidden.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleClick() {
    this.setState({ closed: false });
  }

  handleModalClick() {
    this.setState({ closed: true });
  }

  changeToHidden() {
    if (!this.state.closed) return 'hidden';
  }

  getDisplayMenu() {
    return (
      <MenuOptions />
    );
  }

  render() {
    const hiddenClass = this.changeToHidden();
    let menu;
    if (this.state.closed) {
      menu = (
        <div className={`${hiddenClass}`} onClick={this.handleClick}>
          <i className="fas fa-bars fa-lg" id="menu" ></i >
        </div>
      );
    } else {
      menu = (
        <div>
          <div className="modal" onClick={this.handleModalClick}></div>
          <MenuOptions onClick={this.handleModalClick} />
        </div>
      );
    }
    return (
      <div>
        {menu}
      </div>
    );
  }
}
