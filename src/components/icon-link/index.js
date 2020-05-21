import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";
export default class IconLink extends Component {
  constructor(props) {
    super(props);
    this.header = this.props.header;
    this.image = this.props.image;

    this.state = {};
  }

  render() {
    return (
      <div className="icon-link-container">
        <div className="icon-link-header">{this.header}</div>
      </div>
    );
  }
}

IconLink.propTypes = {
  header: PropTypes.string,
  image: PropTypes.string,
};
