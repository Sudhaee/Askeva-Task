import "./SortBar.css";

function SortBar() {
  return (
    <div className="sort-bar">

      <h3>Showing 4 Verified PGs</h3>

      <select>

        <option>Recommended</option>

        <option>Price: Low to High</option>

        <option>Price: High to Low</option>

        <option>Highest Rated</option>

      </select>

    </div>
  );
}

export default SortBar;
