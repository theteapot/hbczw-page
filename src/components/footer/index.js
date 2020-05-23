import React, { Component } from "react";
import { ReactComponent as FooterLogo } from "./respect-earth-logo.svg";
import "./index.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-image">
        <FooterLogo color="green" />
      </div>
    );
  }
}
