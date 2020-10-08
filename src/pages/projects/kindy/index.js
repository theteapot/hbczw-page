import React, { Component } from "react";

import "./index.css";
import HeroImage from "../../../components/hero-image";
import TextHeader from "../../../components/text-header";
import TextBlock from "../../../components/text-block";
import BodyText from "../../../components/body-text";
import kindergarten from "../../../img/Folkestone2.jpeg";

export default class KindyPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"ZERO WASTE KINDY, where we"}
          headerSecondLine={"prepare for the future"}
          image={kindergarten}
          backgroundPosition='0% 75%'
        />
        <TextBlock>
          <TextHeader>Zero Waste Kindy Project</TextHeader>
          <BodyText text="The Zero Waste Kindy Project brings trained facilitators to your Kindy, Preschool or ECE to set up fun, educational systems to minimise waste.  The Facilitators work with Kindy staff about possibilities to reduce or eliminate these.  Together, a custom-made plan specifically for each Kindy is mapped out. The Facilitators then spend up to 4 months working with the ECEs to fulfil their zero-waste plan." />
          <BodyText text="Currently the program is free due to generosity of funding from the for-Hibiscus Bays Local Board.  Plans are afoot to expand the program into Upper Harbour Local Board and embed the concept of kitiakitanga to establish the Kiwi values of environmental stewardship at an early age.  The project is administered through a charitable environmental trust—Hibiscus Coast Zero Waste.   The Trained facilitators are Joanne Smart and Judith Rosamund. " />
        </TextBlock>
      </div>
    );
  }
}
