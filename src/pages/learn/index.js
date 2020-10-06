import React, { Component } from "react";
import BodyText from "../../components/body-text";
import HeroImage from "../../components/hero-image";
import TextHeader from "../../components/text-header";
import TextBlock from "../../components/text-block";
import library from "../../img/library.jpg";

export default class LearnPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"HERE'S WHAT you"}
          headerSecondLine={"need to know"}
          image={library}
        />
        <TextBlock>
          <TextHeader>Learn</TextHeader>
          <BodyText>Here is where we will teach things.</BodyText>
        </TextBlock>
      </div>
    );
  }
}
