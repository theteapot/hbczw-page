import "./index.css";

import React, { Component } from "react";
import HeroImage from "../../../components/hero-image";
import TextHeader from "../../../components/text-header";
import TextBlock from "../../../components/text-block";
import BodyText from "../../../components/body-text";
import tour from "../../../img/kindy-tour.jpg";

export default class WCRCToursPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={
            "whangaparaoa COMMUNITY RECYCLING CENTRE, let us show you"
          }
          headerSecondLine={"how we can help"}
          image={tour}
        />
        <TextBlock>
          <TextHeader>School and Community Tours of the WCRC</TextHeader>
          <BodyText text="Want to know what really happens to Auckland’s recyclable materials?  Tours are on offer on Tues and Wednesdays when the WCRC is closed.  The tours can be planned to suit seniors down to pre-schoolers and everyone in-between.  Tours are free but a minimum of 10 people are needed. For more information email hibiscuscoastzerowaste@gmail.com" />
        </TextBlock>
      </div>
    );
  }
}
