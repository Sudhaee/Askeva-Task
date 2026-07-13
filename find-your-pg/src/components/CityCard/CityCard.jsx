import { motion } from "framer-motion";
import "./CityCard.css";

function CityCard({ city }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="city-card"
    >
      <img src={city.image} alt={city.name} />

      <div className="city-overlay">

        <h3>{city.name}</h3>

        <span>{city.properties}+ PGs</span>

      </div>
    </motion.div>
  );
}

export default CityCard;