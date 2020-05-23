import "./index.css";

import React, { Component } from "react";
import HeroImage from "../../../components/hero-image";
import TextHeader from "../../../components/text-header";
import TextBlock from "../../../components/text-block";
import BodyText from "../../../components/body-text";

export default class TransitionTownsPage extends Component {
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
          <TextHeader header="Transition Towns HBC" />
          <BodyText text="Transition Towns is an international Permaculture Initiative aimed at Transitioning from an environmentally unsustainable to an environmentally healthy, sustainable world.  Past Meetings have been held on the first Wednesday of each month at the Whangaparaoa Community Hub.  Speakers, movies, and discussions are organised around urban environmental issues.  For more information email hibiscuscoastzerowaste@gmail.com " />
        </TextBlock>
      </div>
    );
  }
}
