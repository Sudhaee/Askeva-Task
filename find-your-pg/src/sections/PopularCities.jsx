import cities from "../data/citiesData";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import CityCard from "../components/CityCard/CityCard";

import "./PopularCities.css";

function PopularCities() {
  return (
    <section className="popular section">

      <div className="container">

        <SectionTitle
          title="Popular Cities"
          subtitle="Explore verified PG accommodations in India's most popular cities."
        />

        <div className="cities-grid">

          {cities.map((city) => (
            <CityCard
              key={city.id}
              city={city}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularCities;