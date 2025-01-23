import FAQ from "@/components/FAQ";
import Landing from "@/components/LandingPage";
import MediaSection from "@/components/MediaSection";
import WorkingProcess from "@/components/WorkingProcess";
import React from "react";

const Home = () => {
  return (
    <div>
      <Landing />
      <WorkingProcess />
      <MediaSection />
      <FAQ />
    </div>
  );
};

export default Home;
