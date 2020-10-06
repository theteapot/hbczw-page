import React, { Component } from "react";

import "./index.css";
import HeroImage from "../../../components/hero-image";
import TextHeader from "../../../components/text-header";
import TextBlock from "../../../components/text-block";
import BodyText from "../../../components/body-text";
import school from "../../../img/school.jpg";

export default class SchoolsPage extends Component {
  render() {
    return (
      <div>
        <HeroImage
          headerFirstLine={"ZERO WASTE SCHOOLS, so we can"}
          headerSecondLine={"teach a new generation"}
          image={school}
        />
        <TextBlock>
          <TextHeader>Zero Waste Zero Carbon in Schools Pilot"</TextHeader>
          <BodyText text="The Zero Waste Zero Carbon in Schools Pilot fills a gap identified by Auckland Council’s Sustainable Schools Team which is the need for a food scrap collection and composting system for Intermediate and High Schools. These large Auckland schools produce too much to go into the worm bins they used in Primary School.  Options for larger scale composting on school grounds are limited given the amount of time and labour needed to collect, sort, layer and turn food scrap compost piles. The alternative of hot composting on faraway sites is a carbon-intensive process.  Yet the importance of returning food to the soil to grow more food is emphasised in the definitive text, “Drawdown” (www.drawdown.org) which identifies  “Reducing Food Waste” as the third most important activity human beings can do to reverse climate change.  The Zero Waste Zero Carbon Project is about learning how to reduce food waste at source, engage students on classroom food scrap separation and collection for returning to a local farm to grow, organic local food.  Students are inspired to learn more about the relationship between the worlds biggest industry (global food production), the gigantic carbon footprint of our current agricultural system and low carbon alternatives.   They learn that local, organic food production is not only the most environmentally friendly way to grow food, but also has the potential to build the soil, improve stream health, and the reverse climate change. They also learn what they can personally do to reverse climate change through practising zero waste, planting trees and building topsoil. " />
          <BodyText text="The program has been developed in conjunction with Northcross School, Hibiscus Coast Zero Waste, and private curriculum contractors, Tread Lightly. The program has been reviewed by the Auckland Council Sustainable Schools Team and the Low Carbon Live Lightly Team.  For more information email hibiscuscoastzerowaste@gmail.com This pilot project is currently funded by Foundation North, the Glass Packaging Forum, The Lion Foundation and administered by Hibiscus Coast Zero Waste." />
        </TextBlock>
      </div>
    );
  }
}
