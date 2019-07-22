import React from "react";
import NewReleaseSection from "../components/NewReleaseSection";
import HomePageCategorySection from '../components/HomePageCategorySection';
import WhatsNewSection from "../components/WhatsNewSection";


export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NewReleaseSection />
        <WhatsNewSection />
        <HomePageCategorySection />
      </React.Fragment>
    );
  }
}
