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
      if (index === Math.floor(links.length / 2)) return <Logo />;
      return this.renderLink(link);
    });
  }

  renderLink({ path, label }) {
    return (
      <div className="nav-link-container">
        <NavLink to={path} className="nav-link" activeClassName="active">
          {label}
          <div className="ink-line" />
        </NavLink>
      </div>
    );
  }
}

NavigateBar.propTypes = {
  links: PropTypes.array,
};
