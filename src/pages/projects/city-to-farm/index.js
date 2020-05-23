import React, { Component } from "react";

import "./index.css";
import HeroImage from "../../../components/hero-image";
import TextHeader from "../../../components/text-header";
import TextBlock from "../../../components/text-block";
import BodyText from "../../../components/body-text";

export default class CityToFarmPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"CITY TO FARM, your place to"}
          headerSecondLine={"lorem, ipsum, dolor"}
        />
        <TextBlock>
          <TextHeader header="The City to Farm Local Food Resilience Project" />
          <BodyText text="We are all looking for innovative, regenerative ways to create new jobs that improve our environment.  The City to Farm Project (C2F) employs local people and creates true wealth—healthy local soils on local farms capable of producing high quality food and fibre. The C2F Project takes urban food scraps and takes them to a local farm for composting.  Using a unique, 4-step composting process poor clay soils are transformed into rich, prime agricultural land.  Besides improving local soils, and growing valuable crops, there is also potential for local rural property owners to qualify for carbon credits by sequestering carbon through topsoil building.  Here is a project that is a win-win-win for creating local employment, improving our local food supply, improving our local farm environment, and reversing climate change. " />
          <BodyText text="The C2F project seeks households and businesses who want to do the right thing and stop using their garbage disposals and insinkerators and instead bring food scraps to the WCRC.  Buckets for food scraps can be picked up and dropped off at the WCRC for a small charge.  Or, for large amounts of food scraps, The C2F box truck can come by and collect wheelie bins directly.  For more information about how it works click here. " />
        </TextBlock>
      </div>
    );
  }
}
