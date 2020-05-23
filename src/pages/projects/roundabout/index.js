import React, { Component } from "react";

import "./index.css";
import HeroImage from "../../../components/hero-image";
import TextHeader from "../../../components/text-header";
import TextBlock from "../../../components/text-block";
import BodyText from "../../../components/body-text";

export default class RoundaboutShopPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={
            "WHANGAPAROA COMMUNITY RECYCLING CENTRE, your place to"
          }
          headerSecondLine={"reduce, reuse, recycle"}
        />
        <TextBlock>
          <TextHeader header="The Roundabout Shop" />
          <BodyText text="Would you like to refill your detergent container, start a backyard compost, learn about organic gardening, dispose of light bulbs and household batteries, or find alternatives to plastics?  Under construction at the WCRC is a little shop that will offer these services and more. " />
        </TextBlock>
      </div>
    );
  }
}
