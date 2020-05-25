import React, { Component } from "react";
import IconLink from "../../components/icon-link";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="wrapping-box">
        <IconLink header="WCRC" to="/projects/wcrc" />
        <IconLink
          header="City to Farm Composting"
          to="/projects/city-to-farm"
        />
        <IconLink header="Zero Waste Kindy" to="/projects/zero-waste-kindy" />
        <IconLink
          header="Zero Carbon Schools"
          to="/projects/zero-carbon-schools"
        />
        <IconLink header="Roundabout Shop" to="/projects/roundabout-shop/" />
        <IconLink header="WCRC Tours" to="/projects/wcrc-tours/" />
        <IconLink
          header="Transition Towns HBC"
          to="/projects/transition-towns-hbc"
        />
        <IconLink header="Zero Waste Events" to="/projects/zero-waste-events" />
      </div>
    );
  }
}
