import React from "react";
import "./App.css";
import NavigateBar from "./components/navigate-bar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/home";
import WCRCPage from "./pages/projects/wcrc";
import Footer from "./components/footer";
import CityToFarmPage from "./pages/projects/city-to-farm";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import KindyPage from "./pages/projects/kindy";
import SchoolsPage from "./pages/projects/schools";
import WCRCToursPage from "./pages/projects/wcrc-tours";
import RoundaboutShopPage from "./pages/projects/roundabout";
import ZeroWasteEventsPage from "./pages/projects/zero-waste-events";
import TransitionTownsPage from "./pages/projects/transition-towns";
import ProjectsPage from "./pages/projects";
import LearnPage from "./pages/learn";
import TakeActionPage from "./pages/take-action";
import NewsPage from "./pages/news";
import ContactPage from "./pages/contact";
import NavigateBarMobile from "./components/navigate-bar-mobile";

function App() {
  const isMobile = window.innerWidth < 480;
  const links = [
    { path: "/home", label: "Home" },
    {
      path: "/projects",
      label: "Projects",
      dropdown: [
        { path: "/projects/city-to-farm", label: "City to Farm" },
        {
          path: "/projects/zero-waste-kindy",
          label: "Zero Waste Kindy",
        },
        {
          path: "/projects/zero-carbon-schools",
          label: "Zero Waste Zero Carbon in Schools",
        },
        {
          path: "/projects/roundabout-shop",
          label: "Roundabout Shop",
        },
        { path: "/projects/wcrc", label: "WCRC" },
        { path: "/projects/wcrc-tours", label: "WCRC Tours" },
        {
          path: "/projects/transition-towns-hbc",
          label: "Transition Towns HBC",
        },
        {
          path: "/projects/zero-waste-events",
          label: "Zero Waste Events",
        },
      ],
    },
    { path: "/learn", label: "Learn" },
    { path: "/take-action", label: "Take Action" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <Router>
      <div className="main-background">
        {isMobile ? (
          <NavigateBarMobile links={links} />
        ) : (
            <NavigateBar links={links} />
          )}
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
              // key={location.pathname}
              // classNames="fade"
              // timeout={600}
              >
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/home" />
                  </Route>
                  <Route path="/home">
                    <HomePage />
                  </Route>
                  <Route path="/projects">
                    <Route exact path="/projects">
                      <ProjectsPage />
                    </Route>
                    <Route path="/projects/wcrc">
                      <WCRCPage />
                    </Route>
                    <Route path="/projects/city-to-farm">
                      <CityToFarmPage />
                    </Route>
                    <Route path="/projects/zero-waste-kindy">
                      <KindyPage />
                    </Route>
                    <Route path="/projects/zero-carbon-schools">
                      <SchoolsPage />
                    </Route>
                    <Route path="/projects/roundabout-shop">
                      <RoundaboutShopPage />
                    </Route>
                    <Route path="/projects/wcrc-tours">
                      <WCRCToursPage />
                    </Route>
                    <Route path="/projects/zero-waste-events">
                      <ZeroWasteEventsPage />
                    </Route>
                    <Route path="/projects/transition-towns-hbc">
                      <TransitionTownsPage />
                    </Route>
                  </Route>

                  <Route path="/learn">
                    <LearnPage />
                  </Route>
                  <Route path="/take-action">
                    <TakeActionPage />
                  </Route>
                  <Route path="/news">
                    <NewsPage />
                  </Route>
                  <Route path="/contact">
                    <ContactPage />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
      {!isMobile && <Footer />}
    </Router>
  );
}

export default App;
