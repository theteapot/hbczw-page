import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

export default class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.headerFirstLine = this.props.headerFirstLine;
    this.headerSecondLine = this.props.headerSecondLine;
    this.state = {};
  }

  render() {
    return (
      <div className="hero-image-container">
        <div className="hero-text-first-line">{this.headerFirstLine}</div>
        <div className="hero-text-second-line">{this.headerSecondLine}</div>
      </div>
    );
  }
}

HeroImage.propTypes = {
  image: PropTypes.string,
  headerFirstLine: PropTypes.string,
  headerSecondLine: PropTypes.string,
};
