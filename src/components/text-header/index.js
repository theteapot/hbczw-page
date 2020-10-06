import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

export default class TextHeader extends Component {
  constructor(props) {
    super(props);
    this.header = this.props.header;
    this.state = {};
  }

  render() {
    return <div className="text-header">{this.props.children}</div>;
  }
}

TextHeader.propTypes = {
  header: PropTypes.string,
};
