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
          <IconLink header="WCRC" to="/projects/wcrc" />
          <IconLink
            header="City to Farm Composting"
            to="/projects/city-to-farm"
          />
          <IconLink
            header="Zero Waste Kindy"
            to="/projects/zero-waste-kindy"
          />
          <IconLink
            header="Zero Carbon Schools"
            to="/projects/zero-carbon-schools"
          />
          <IconLink header="Roundabout Shop" to="/projects/roundabout-shop/" />
          <IconLink header="WCRC Tours" to="/projects/wcrc-tours/" />
          <IconLink
            header="Transition Towns HBC"
            to="/projects/transition-towns-hbc"
          />
          <IconLink
            header="Zero Waste Events"
            to="/projects/zero-waste-events"
          />
        </div>
        <TextBlock>
          <TextHeader header="Our Mission" />
          <BodyText text="Zero Waste Network represents community enterprises across Aotearoa New Zealand who are working towards zero waste. Our mission is connect, educate, enable and inspire them to reach their goals and to be a unifying voice at local, regional and central government levels" />
          <TextHeader header="Our Vision" />
          <BodyText text="Zero Waste Network represents community enterprises across Aotearoa New Zealand who are working towards zero waste. Our mission is connect, educate, enable and inspire them to reach their goals and to be a unifying voice at local, regional and central government levels" />
          <TextHeader header="Our Story" />
          <BodyText text="Zero Waste Network represents community enterprises across Aotearoa New Zealand who are working towards zero waste. Our mission is connect, educate, enable and inspire them to reach their goals and to be a unifying voice at local, regional and central government levels" />
          <TextHeader header="Our Members" />
          <BodyText text="Zero Waste Network represents community enterprises across Aotearoa New Zealand who are working towards zero waste. Our mission is connect, educate, enable and inspire them to reach their goals and to be a unifying voice at local, regional and central government levels" />
        </TextBlock>
      </div>
    );
  }
}
