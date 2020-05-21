import React, { Component } from "react";

import "./index.css";
import IconLink from "../../components/icon-link";
import HeroImage from "../../components/hero-image";
import TextHeader from "../../components/text-header";
import TextBlock from "../../components/text-block";
import BodyText from "../../components/body-text";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"HIBISCUS COAST ZERO WASTE NETWORK, your forum to"}
          headerSecondLine={"connect, learn, act"}
        />
        <div className="wrapping-box">
          <IconLink header="IMage Link" />
          <IconLink header="IMage Link" />
          <IconLink header="IMage Link" />
          <IconLink header="IMage Link" />
          <IconLink header="IMage Link" />
        </div>
        <TextBlock>
          <TextHeader header="Kia Ora" />
          <BodyText text="Zero Waste Network represents community enterprises across Aotearoa New Zealand who are working towards zero waste. Our mission is connect, educate, enable and inspire them to reach their goals and to be a unifying voice at local, regional and central government levels" />
        </TextBlock>
      </div>
    );
  }
}
