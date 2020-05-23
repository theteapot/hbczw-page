import React, { Component } from "react";

import "./index.css";
import HeroImage from "../../../components/hero-image";
import TextHeader from "../../../components/text-header";
import TextBlock from "../../../components/text-block";
import BodyText from "../../../components/body-text";

export default class WCRCPage extends Component {
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
          <TextHeader header="The Whangaparoa Community Recycling Centre" />
          <BodyText text="This much-loved community recycling centre (WCRC) has been running since the 1980s, started initially by the local Boy Scouts. The site is owned by Auckland Council and it is run by a local charitable environmental community trust, Hibiscus Coast Zero Waste.  The WCRC is widely used by those with too much cardboard to fit into their kerbside bin but takes many recyclable materials.  Dropped off for free—glass, paper, aluminium, cans and car batteries.  These are sorted on site which increases opportunities on-shore recycling.    Because of the collapse of the international markets the Trust must charge a small amount for accepting cardboard and plastics but even these materials are more apt to be recycled in NZ because they are cleanly sorted. The WCRC will be open starting at Level 2 from 8am to 4pm Thurs-Monday.  The WCRC is closed on Tues and Wednesdays. " />
          <BodyText text="The WCRC also takes clean polystyrene, all broken appliances, e-waste, computers, printers, monitors, whiteware, and household batteries. These are taken away by an internationally registered e-waste recycler, E-Cycle Ltd. The Trust pays E-Cycle to properly dismantle and recycle all components possible so there is a charge to accept these.   The price list can be found at whanga-recycling.co.nz" />
          <TextHeader header="COVID-19 Safety at Level 2" />
          <BodyText text="Covid-19 Safety at Level 2 – Please bring exact change, an Eftpos card capable of payWave, or purchase a $15 “Clip Card” to avoid the exchange of money.  Be prepared to unload your own recyclable materials and stay 2m apart from other users.  The site has a hand-washing basin, soap and sanitizer to use before and after dropping off materials.  The Site Workers regularly wipe down the Eftpos machine and frequently touched surfaces." />
        </TextBlock>
      </div>
    );
  }
}
