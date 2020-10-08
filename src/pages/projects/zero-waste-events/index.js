import "./index.css";

import React, { Component } from "react";
import HeroImage from "../../../components/hero-image";
import TextHeader from "../../../components/text-header";
import TextBlock from "../../../components/text-block";
import BodyText from "../../../components/body-text";
import zeroWasteEvents from "../../../img/BAF_Volunteers_2.jpg";

export default class ZeroWasteEventsPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"ZERO WASTE EVENTS, how we can help you"}
          headerSecondLine={"get your message out"}
          image={zeroWasteEvents}
          backgroundPosition='0% 40%'
        />
        <TextBlock>
          <TextHeader>Zero Waste Events</TextHeader>
          <BodyText text="Have a big family wedding, birthday or anniversary party coming up and want it to be Zero Waste?  You can use the specially cleaned, WCRC  bins, liners and signs and then bring the full bins of glass, cans or cardboard back to the WCRC for recycling.  Hibiscus Coast Zero Waste can also advise on serveware that is “home compostable” so plates, bowls and cutlery can be composted in your backyard rather than be hauled off to the landfill.  Hibiscus Coast Zero Waste has done the zero waste event management for the Boulevard Arts Festival for the past 3 years for Destination Orewa Beach.  For more information email hibiscuscoastzerowaste@gmail.com.  Hibiscus Coast Zero Waste is capable of setting up, kitting out and managing civic zero waste events of up to 15,000 participants.  " />
        </TextBlock>
      </div>
    );
  }
}
