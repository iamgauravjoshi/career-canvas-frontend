import React from "react";
import MainSection from "./MainSection";
import FeatureSection from "./FeatureSection";
import OurTeamSection from "./OurTeamSection";
import CtaSection from "./CtaSection";

// import Body from "../components/Body/Body";

function Homepage() {

   return (
      <>
        <MainSection/>
        <FeatureSection/> 
        <CtaSection/>
        <OurTeamSection/>
      </>
   );
}

export default Homepage;
