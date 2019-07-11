import React from "react";
import NewReleaseSection from "../components/NewReleaseSection";
import CategorySection from "../components/CategorySection";
import WhatsNewSection from "../components/WhatsNewSection";

export default class Home extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <p>.....</p>
        <NewReleaseSection />
        <WhatsNewSection />
        <CategorySection />
      </React.Fragment>
    );
  }
}
