import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./index.css";
export default class IconLink extends Component {
  constructor(props) {
    super(props);
    this.header = this.props.header;
    this.image = this.props.image;
    this.to = this.props.to;

    this.state = {};
  }

  render() {
    return (
      <Link className="icon-link-anchor" to={this.to}>
        <div className="icon-link-container">
          <div className="icon-link-header">{this.header}</div>
        </div>
      </Link>
    );
  }
}

IconLink.propTypes = {
  header: PropTypes.string,
  image: PropTypes.string,
  to: PropTypes.string,
};
