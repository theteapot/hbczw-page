import React from "react";
import "./App.css";
import NavigateBar from "./components/navigate-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="main-background">
        <NavigateBar
          links={[
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
                  label: "Zero Carbon Schools",
                },
                { path: "/projects/roundabout-shop", label: "Roundabout Shop" },
                { path: "/projects/wcrc-tours", label: "WCRC Tours" },
                {
                  path: "/projects/transition-towns-hbc",
                  label: "Transition Towns HBC",
                },
                {
                  path: "/projects/zero-wate-events",
                  label: "Zero Waste Events",
                },
              ],
            },
            { path: "/learn", label: "Learn" },
            { path: "/take-action", label: "Take Action" },
            { path: "/news", label: "News" },
            { path: "/contact", label: "Contact" },
          ]}
        />

        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/projects">
            <div></div>
          </Route>
          <Route path="/learn">
            <div></div>
          </Route>
          <Route path="/take-action">
            <div></div>
          </Route>
          <Route path="/news">
            <div></div>
          </Route>
          <Route path="/contact">
            <div></div>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
