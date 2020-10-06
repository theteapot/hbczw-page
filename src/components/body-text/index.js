import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

export default class BodyText extends Component {
  constructor(props) {
    super(props);
    this.text = this.props.text;
    this.state = {};
  }

  render() {
    return (
      <div className="body-text-content">
        {this.text}
        {this.props.children}
      </div>
    );
  }
}

BodyText.propTypes = {
  text: PropTypes.string,
};
