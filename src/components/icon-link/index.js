import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import placeholder from "../../img/placeholder.jpg";

import "./index.css";
export default class IconLink extends Component {
  constructor(props) {
    super(props);
    this.header = this.props.header;
    this.image = this.props.image;
    this.to = this.props.to;
    this.image = this.props.image || placeholder;

    this.state = {};
  }

  render() {
    return (
      <Link className="icon-link-anchor" to={this.to}>
        <div
          className="icon-link-container"
          style={{
            backgroundImage: `url(${this.image})`,
            backgroundSize: "cover",
          }}
        >
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
