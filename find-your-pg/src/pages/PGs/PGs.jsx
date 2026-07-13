import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import SortBar from "../../components/SortBar/SortBar";
import PGCard from "../../components/PGCard/PGCard";
import pgData from "../../data/pgData";

import "./PGs.css";

function PGs() {
  return (
    <section className="pg-page">

      <div className="container">

        <div className="pg-layout">

          <FilterSidebar />

          <div className="pg-content">

            <SortBar />

            <div className="pg-grid">

              {pgData.map((pg) => (
                <PGCard
                  key={pg.id}
                  pg={pg}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PGs;