import React, { Component } from "react";
import BodyText from "../../components/body-text";
import HeroImage from "../../components/hero-image";
import TextHeader from "../../components/text-header";
import TextBlock from "../../components/text-block";
import penOnKeyboard from "../../img/pen-on-keyboard.jpg";

export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"IT'S TIME"}
          headerSecondLine={"to get in touch"}
          image={penOnKeyboard}
        />
        <TextBlock>
          <TextHeader>Contact Us</TextHeader>
          <BodyText>Give us a call:
             <div>Betsy Kettle 021 0826 8196</div></BodyText>
        </TextBlock>
      </div>
    );
  }
}
