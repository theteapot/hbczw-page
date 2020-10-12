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
          <TextHeader>Who We Are</TextHeader>
          <BodyText>Hibiscus Coast Zero Waste is a community enterprise- a for-profit organisation where the profits (if any) go back into the community in the form of new jobs and site improvements, not shareholder pockets.</BodyText>
          <BodyText>HCZW is a local, charitable, community trust that works closely with E-Cycle, a nation-wide electronic waste recycling business. </BodyText>
        </TextBlock>
      </div>
    );
  }
}
