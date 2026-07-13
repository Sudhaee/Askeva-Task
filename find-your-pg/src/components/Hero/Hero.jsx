import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find Your Perfect PG
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
        >
          Discover verified PG accommodations with affordable pricing,
          premium facilities and prime locations.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
        >
          <Link to="/pgs" className="primary-btn">
            Explore PGs
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact
          </Link>
        </motion.div>

      </div>

      <SearchBox />

    </section>
  );
}

export default Hero;