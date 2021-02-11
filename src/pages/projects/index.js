import React, { Component } from "react";
import IconLink from "../../components/icon-link";

import cityToFarm from "../../img/NZ_Gardener.jpg";
import kindergarten from "../../img/Folkestone2.jpeg";
import school from "../../img/school.jpg";
import shop from "../../img/ecoshop-opening.jpg";
import transitionTowns from "../../img/transition-towns.jpg";
import whangaparaoa2 from "../../img/whangaparaoa-2.jpg";
import whangaparaoa from "../../img/whangaparaoa.jpg";
import zeroWasteEvents from "../../img/BAF_Volunteers_2.jpg";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="wrapping-box">
        <IconLink header="WCRC" to="/projects/wcrc" image={whangaparaoa} />
        <IconLink
          header="City to Farm Food Cycle"
          to="/projects/city-to-farm"
          image={cityToFarm}
        />
        <IconLink
          header="Zero Waste Kindy and ECE"
          to="/projects/zero-waste-kindy"
          image={kindergarten}
        />
        <IconLink
          header="Zero Waste Zero Carbon in Schools"
          to="/projects/zero-carbon-schools"
          image={school}
        />
        <IconLink header="Ecoshop" to="/projects/ecoshop/" image={shop} />
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
