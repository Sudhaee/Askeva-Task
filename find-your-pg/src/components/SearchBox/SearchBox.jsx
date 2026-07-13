//import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="search-box">

      <div className="search-field">
        <label>Location</label>
        <input placeholder="Enter city" />
      </div>

      <div className="search-field">
        <label>Budget</label>
        <select>
          <option>Any</option>
          <option>₹5,000 - ₹8,000</option>
          <option>₹8,000 - ₹12,000</option>
          <option>₹12,000+</option>
        </select>
      </div>

      <div className="search-field">
        <label>Sharing</label>
        <select>
          <option>Any</option>
          <option>Single</option>
          <option>Double</option>
          <option>Triple</option>
        </select>
      </div>

      <button className="search-btn">
        <FaSearch />
        Search
      </button>

    </div>
  );
}

export default SearchBox;