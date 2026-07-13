import "./FilterSidebar.css";

function FilterSidebar() {
  return (
    <aside className="filter-sidebar">

      <h2>Filters</h2>

      <div className="filter-box">

        <h4>Budget</h4>

        <input
          type="range"
          min="3000"
          max="15000"
        />

      </div>

      <div className="filter-box">

        <h4>Gender</h4>

        <label>
          <input type="checkbox" />
          Boys
        </label>

        <label>
          <input type="checkbox" />
          Girls
        </label>

      </div>

      <div className="filter-box">

        <h4>Sharing</h4>

        <label>
          <input type="checkbox" />
          Single
        </label>

        <label>
          <input type="checkbox" />
          Double
        </label>

        <label>
          <input type="checkbox" />
          Triple
        </label>

      </div>

      <div className="filter-box">

        <h4>Amenities</h4>

        <label><input type="checkbox" /> WiFi</label>
        <label><input type="checkbox" /> Food</label>
        <label><input type="checkbox" /> AC</label>
        <label><input type="checkbox" /> Laundry</label>

      </div>

    </aside>
  );
}

export default FilterSidebar;