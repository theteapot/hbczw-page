import React, { Component } from "react";
import BodyText from "../../components/body-text";
import HeroImage from "../../components/hero-image";
import TextHeader from "../../components/text-header";
import TextBlock from "../../components/text-block";
import landfill from "../../img/landfill.jpg";

export default class TakeActionPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"IT'S TIME"}
          headerSecondLine={"to take action"}
          image={landfill}
        />
        <TextBlock>
          <TextHeader>Take Action</TextHeader>
          <BodyText>Here is where we will tell you how to take action</BodyText>
        </TextBlock>
      </div>
    );
  }
}
