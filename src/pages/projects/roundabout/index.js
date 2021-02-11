import React, { Component } from "react";

import "./index.css";
import HeroImage from "../../../components/hero-image";
import TextHeader from "../../../components/text-header";
import TextBlock from "../../../components/text-block";
import BodyText from "../../../components/body-text";
import shop from "../../../img/ecoshop-opening.jpg";

export default class RoundaboutShopPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"ECOSHOP SHOP, where you can"}
          headerSecondLine={"upcycle your life"}
          image={shop}
          backgroundPosition="0% 30%"
        />
        <TextBlock>
          <TextHeader>The Ecoshop</TextHeader>
          <BodyText text="Would you like to refill your detergent container, start a backyard compost, learn about organic gardening, dispose of light bulbs and household batteries, or find alternatives to plastics?  Under construction at the WCRC is a little shop that will offer these services and more. " />
        </TextBlock>
      </div>
    );
  }
}
