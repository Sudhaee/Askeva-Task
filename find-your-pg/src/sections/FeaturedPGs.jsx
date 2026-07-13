import SectionTitle from "../components/SectionTitle/SectionTitle";
import PGCard from "../components/PGCard/PGCard";
import pgData from "../data/pgData";
import "./FeaturedPGs.css";

function FeaturedPGs() {
  return (
    <section className="featured section">
      <div className="container">

        <SectionTitle
          title="Featured PGs"
          subtitle="Verified accommodations loved by students and professionals."
        />

        <div className="featured-grid">

          {pgData.map((pg) => (
            <PGCard
              key={pg.id}
              pg={pg}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedPGs;