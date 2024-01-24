import Hero from "../components/Hero";
import Features from "../components/Features";
import WhatWeOffer from "../components/WhatWeOffer";
import Finance from "../components/Finance";
import Compare from "../components/Compare";
import CallUs from "../components/CallUs";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-y-32">
        <Hero />
        <WhatWeOffer />
        <Finance />
        <Compare />
        <CallUs />
        <Faq />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
};

export default Home;
