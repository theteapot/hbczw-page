import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Logo from "../logo";

export default class NavigateBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: props.links || [],
    };
  }

  componentDidMount() {
    if (this.props.links.length > 0) {
      this.props.links.splice(
        Math.floor(this.props.links.length / 2),
        0,
        <Logo />
      );
      this.setState({ links: this.props.links });
    }
  }

  render() {
    return (
      <div className="navigate-bar-container">
        <div className="navigate-bar-content">
          <ul className="nav-link-list">
            {this.renderLinks(this.state.links)}
          </ul>
        </div>
      </div>
    );
  }

  renderLinks(links) {
    return links.map((link, index, links) => {
      // Render the logo in the center always
      if (index === Math.floor(links.length / 2)) return <Logo />;
      return this.renderLink(link);
    });
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

  renderLink({ path, label, dropdown }) {
    return (
      <div className="nav-link-container">
        <NavLink
          to={path}
          className={`nav-link ${dropdown ? "dropdown-nav" : ""}`}
          activeClassName="active"
        >
          {label}
        </NavLink>
        {dropdown ? this.renderDropDown(dropdown) : null}
      </div>
    );
  }
}

NavigateBar.propTypes = {
  links: PropTypes.array,
};
