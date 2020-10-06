import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import "./index.css";

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.path = this.props.path;
    this.label = this.props.label;
    this.onClick = this.props.onClick;
    this.dropdown = this.props.dropdown;
    this.state = {};
  }

  renderDropDown(dropdown) {
    return (
      <div className="dropdown-menu">
        {dropdown.map(({ path, label }) => (
          <div className="dropdown-link-container">
            <NavLink className="nav-link dropdown-link" to={path}>
              {label}
            </NavLink>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="nav-link-container">
        <NavLink
          to={this.path}
          onClick={this.onClick}
          className={`nav-link ${this.dropdown ? "dropdown-nav" : ""}`}
          activeClassName="active"
        >
          {this.label}
        </NavLink>
        {this.dropdown ? this.renderDropDown(this.dropdown) : null}
      </div>
    );
  }
}
