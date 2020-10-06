import React, { Component } from "react";

import "./index.css";
import HeroImage from "../../components/hero-image";
import TextHeader from "../../components/text-header";
import TextBlock from "../../components/text-block";
import BodyText from "../../components/body-text";
import recycleCentre from "../../img/recycle-centre.jpg";
import ProjectsPage from "../projects";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"HIBISCUS COAST ZERO WASTE NETWORK, your forum to"}
          headerSecondLine={"connect, learn, act"}
          image={recycleCentre}
        />
        <ProjectsPage />

        <TextBlock>
          <TextHeader>Our Mission</TextHeader>
          <BodyText text="Zero Waste Network represents community enterprises across Aotearoa New Zealand who are working towards zero waste. Our mission is connect, educate, enable and inspire them to reach their goals and to be a unifying voice at local, regional and central government levels" />
          <TextHeader>Our Vision</TextHeader>
          <BodyText text="Zero Waste Network represents community enterprises across Aotearoa New Zealand who are working towards zero waste. Our mission is connect, educate, enable and inspire them to reach their goals and to be a unifying voice at local, regional and central government levels" />
          <TextHeader>Our Story</TextHeader>
          <BodyText text="Zero Waste Network represents community enterprises across Aotearoa New Zealand who are working towards zero waste. Our mission is connect, educate, enable and inspire them to reach their goals and to be a unifying voice at local, regional and central government levels" />
          <TextHeader>Our Members</TextHeader>
          <BodyText text="Zero Waste Network represents community enterprises across Aotearoa New Zealand who are working towards zero waste. Our mission is connect, educate, enable and inspire them to reach their goals and to be a unifying voice at local, regional and central government levels" />
        </TextBlock>
      </div>
    );
  }
}
