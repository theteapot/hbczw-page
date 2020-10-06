import React, { Component } from "react";
import IconLink from "../../components/icon-link";

import cityToFarm from "../../img/city-to-farm.jpg";
import kindergarten from "../../img/kindergarten.jpg";
import school from "../../img/school.jpg";
import shop from "../../img/shop.jpg";
import transitionTowns from "../../img/transition-towns.jpg";
import whangaparaoa2 from "../../img/whangaparaoa-2.jpg";
import whangaparaoa from "../../img/whangaparaoa.jpg";
import zeroWasteEvents from "../../img/zero-waste-events.jpg";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="wrapping-box">
        <IconLink header="WCRC" to="/projects/wcrc" image={whangaparaoa} />
        <IconLink
          header="City to Farm Composting"
          to="/projects/city-to-farm"
          image={cityToFarm}
        />
        <IconLink
          header="Zero Waste Kindy"
          to="/projects/zero-waste-kindy"
          image={kindergarten}
        />
        <IconLink
          header="Zero Carbon Schools"
          to="/projects/zero-carbon-schools"
          image={school}
        />
        <IconLink
          header="Roundabout Shop"
          to="/projects/roundabout-shop/"
          image={shop}
        />
        <IconLink
          header="WCRC Tours"
          to="/projects/wcrc-tours/"
          image={whangaparaoa2}
        />
        <IconLink
          image={transitionTowns}
          header="Transition Towns HBC"
          to="/projects/transition-towns-hbc"
        />
        <IconLink
          image={zeroWasteEvents}
          header="Zero Waste Events"
          to="/projects/zero-waste-events"
        />
      </div>
    );
  }
}
