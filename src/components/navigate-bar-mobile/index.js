import React, { Component } from "react";
import Link from "../link";
import "./index.css";
import { ReactComponent as Logo } from "../../img/hbc-flower.svg";
import onClickOutside from "react-onclickoutside";
import HamburgerMenu from "react-hamburger-menu";

class NavigateBarMobile extends Component {
  constructor(props) {
    super(props);

    this.links = this.props.links || [];

    this.state = {
      collapsed: true,
    };

    this._collapse = this._collapse.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    this.setState({ collapsed: true });
  }

  render() {
    return (
      <div className="mobile-nav-bar-container">
        <div className="mobile-nav-bar-content">
          <div className="mobile-nav-bar-header">
            <HamburgerMenu
              isOpen={!this.state.collapsed}
              menuClicked={this._collapse}
              color="white"
            />
            <div onClick={this._collapse} className="mobile-nav-bar-header">
              HBC ZERO WASTE
            </div>
          </div>
          <div
            className="mobile-nav-bar-link-list"
            tabIndex="0"
            onBlur={() => console.log("asdfasdf")}
          >
            {!this.state.collapsed &&
              this.links.map(({ label, path, dropdown }) => (
                <Link
                  label={label}
                  path={path}
                  dropdown={false}
                  onClick={this._collapse}
                />
              ))}
          </div>
        </div>
        <div className="mobile-nav-bar-bottom-padding" />
      </div>
    );
  }

  _collapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }
}

export default onClickOutside(NavigateBarMobile);
