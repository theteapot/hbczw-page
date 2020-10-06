import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ReactComponent as KoruLogo } from "./hbc-flower-2.svg";

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
        <KoruLogo className="nav-logo" />
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
    return links.map((link) => {
      // If we get a valid element, i.e. the logo component, just render it directly
      if (React.isValidElement(link)) return link;
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
