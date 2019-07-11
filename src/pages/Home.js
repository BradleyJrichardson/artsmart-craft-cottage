import React from "react";
import { ProductConsumer } from "../context/Context";
import NewReleaseSection from "../components/NewReleaseSection";
import CategorySection from "../components/CategorySection";
import WhatsNewSection from "../components/WhatsNewSection";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NewReleaseSection />
        <WhatsNewSection />
        <CategorySection />
      </React.Fragment>
    );
  }
}
