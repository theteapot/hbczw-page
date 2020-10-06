import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../img/hbc-flower.svg";
import Link from "../link";

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
        <Logo className="nav-logo" />
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
      return (
        <Link label={link.label} dropdown={link.dropdown} path={link.path} />
      );
    });
  }
}

NavigateBar.propTypes = {
  links: PropTypes.array,
};
