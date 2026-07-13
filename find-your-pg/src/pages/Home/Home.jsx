import Hero from "../../components/Hero/Hero";
import PopularCities from "../../sections/PopularCities";
import FeaturedPGs from "../../sections/FeaturedPGs";

import "./Home.css";

function Home() {
  return (
    <>
      <Hero />
      <PopularCities />
      <FeaturedPGs />
    </>
  );
}

export default Home;