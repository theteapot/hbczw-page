import React, { Component } from "react";
import BodyText from "../../components/body-text";
import HeroImage from "../../components/hero-image";
import TextHeader from "../../components/text-header";
import TextBlock from "../../components/text-block";
import coffeeNewspaper from "../../img/coffee-newspaper.jpg";

export default class NewsPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"WHAT'S new"}
          headerSecondLine={"this is what we're doing"}
          image={coffeeNewspaper}
        />
        <TextBlock>
          <TextHeader>News</TextHeader>
          <BodyText>This is where news will go.</BodyText>
        </TextBlock>
      </div>
    );
  }
}
