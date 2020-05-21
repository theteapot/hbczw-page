import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class TextBlock extends Component {
  render() {
    return <div className="text-block-container">{this.props.children}</div>;
  }
}

TextBlock.propTypes = {
  body: PropTypes.string,
  header: PropTypes.string,
};
