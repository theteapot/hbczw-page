import React, { Component } from "react";

import "./index.css";
import HeroImage from "../../../components/hero-image";
import TextHeader from "../../../components/text-header";
import TextBlock from "../../../components/text-block";
import BodyText from "../../../components/body-text";
import whangaparaoa from "../../../img/whangaparaoa.jpg";
import WasteTable from './waste-table'

export default class WCRCPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={
            <div>
              <div>
                Open: 5 days Thursday - Monday, 8 am to 4 pm except Public Holidays
            </div>
              <div>
                637 Whangaparaoa Road, Stanmore Bay, Hibiscus Coast, Auckland, NZ
            </div></div>
          }
          headerSecondLine={"Whangaparaoa Community Recycling Centre"}
          image={whangaparaoa}
        />
        <TextBlock>
          <BodyText></BodyText>
          <TextHeader>Services of the Whangaparaoa Community Recycling Centre</TextHeader>
          <BodyText>Free Drop Off for: Paper, Glass bottles, Steel and Aluminium Cans, Car batteries</BodyText>
          <BodyText>Charging for drop off of: Plastics, Cardboard, Polystyrene, E-waste, appliances, Household Batteries</BodyText>
          <WasteTable />
          <TextHeader>Polystyrene Charges</TextHeader>
          <BodyText>$5 per 60 litre bag. Bags provided at the Recycling Drop off. Break up polystyrene to fit as much into the bag as possible</BodyText>
          <TextHeader>Battery Charges</TextHeader>
          <BodyText>Charging for all hand-held householdbatteries $5.50/kg (AAA, AA, A, C, D and 9v) Free for car, truck, motorcycle batteries</BodyText>
          <TextHeader>Plastic Charges</TextHeader>
          <BodyText>Gold coin for up to 20 litres, $3 for 60 litres (black sack) Needs to be sorted into #1, #2 and mixed (#3-7 and unmarked)</BodyText>
          <TextHeader>Cardboard Charges</TextHeader>
          <BodyText>Gold coin for a up to 10 boxes, $3 for a boot-full, $5 for a ute-full of boxes. No charge for paper, or card</BodyText>
          <TextHeader>Why we have to Charge</TextHeader>
          <BodyText>With the closure of off-shore markets, local markets are flooded. The value of NZ’s recyclable commodities have dropped so low we can no longer cover the transport costs into Auckland.</BodyText>
          <TextHeader>The Whangaparaoa Community Recycling Centre</TextHeader>
          <BodyText text="This much-loved community recycling centre (WCRC) has been running since the 1980s, started initially by the local Boy Scouts. The site is owned by Auckland Council and it is run by a local charitable environmental community trust, Hibiscus Coast Zero Waste.  The WCRC is widely used by those with too much cardboard to fit into their kerbside bin but takes many recyclable materials.  Dropped off for free—glass, paper, aluminium, cans and car batteries.  These are sorted on site which increases opportunities on-shore recycling.    Because of the collapse of the international markets the Trust must charge a small amount for accepting cardboard and plastics but even these materials are more apt to be recycled in NZ because they are cleanly sorted. The WCRC will be open starting at Level 2 from 8am to 4pm Thurs-Monday.  The WCRC is closed on Tues and Wednesdays. " />
          <BodyText text="The WCRC also takes clean polystyrene, all broken appliances, e-waste, computers, printers, monitors, whiteware, and household batteries. These are taken away by an internationally registered e-waste recycler, E-Cycle Ltd. The Trust pays E-Cycle to properly dismantle and recycle all components possible so there is a charge to accept these.   The price list can be found at whanga-recycling.co.nz" />
          <TextHeader>COVID-19 Safety at Level 2</TextHeader>
          <BodyText text="Covid-19 Safety at Level 2 – Please bring exact change, an Eftpos card capable of payWave, or purchase a $15 “Clip Card” to avoid the exchange of money.  Be prepared to unload your own recyclable materials and stay 2m apart from other users.  The site has a hand-washing basin, soap and sanitizer to use before and after dropping off materials.  The Site Workers regularly wipe down the Eftpos machine and frequently touched surfaces." />
          <TextHeader>Who is HCZW?</TextHeader>
          <BodyText>Hibiscus Coast Zero Waste is a community enterprise- a for-profit organisation where the profits (if any) go back into the community in the form of new jobs and site improvements, not shareholder pockets.
          HCZW is a local, charitable, community trust that works closely with E-Cycle, a nation-wide electronic waste recycling business.</BodyText>
          <TextHeader>What is the WCRC?</TextHeader>
          <BodyText>The Whangaparaoa Community Recycling Centre (WCRC) is one of 7 Centres owned by Auckland Council and run by local community organisations. It is the people of Auckland’s vision to have a network of CRCs serving all the Auckland communities. HCZW aspires to grow the WCRC into a larger, more diverse facility capable of taking a wider range of materials to create local jobs from local resources. Other CRCs are in Helensville, Devonport, the Waitakere Concourse Henderson, Waiuku, Snell’s Beach and Wellsford.</BodyText>
        </TextBlock>
      </div>
    );
  }
}
