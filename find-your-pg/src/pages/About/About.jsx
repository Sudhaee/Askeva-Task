import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="container">

        {/* Header */}
        <div className="about-header">
          <h1>About Find Your PG</h1>

          <p>
            Find Your PG is a modern accommodation platform designed to help
            students and working professionals discover safe, verified, and
            affordable PGs across major cities in India.
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
              alt="Students and professionals"
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>

            <p>
              Finding a comfortable PG shouldn't be difficult. That's why
              <strong> Find Your PG </strong>
              was created—to simplify the search process by bringing verified
              accommodations, transparent pricing, and trusted reviews together
              in one place.
            </p>

            <p>
              Whether you're moving for higher education, a new job, or an
              internship, our platform helps you compare, explore, and book
              quality PGs with confidence.
            </p>

            <p>
              We focus on comfort, affordability, safety, and convenience,
              making your accommodation search simple and stress-free.
            </p>
          </motion.div>

        </div>

        {/* Mission Vision */}
        <div className="mission-grid">

          <div className="mission-card">
            <h3>🎯 Our Mission</h3>

            <p>
              To make PG searching easier by providing verified properties,
              transparent pricing, and a seamless booking experience.
            </p>
          </div>

          <div className="mission-card">
            <h3>🚀 Our Vision</h3>

            <p>
              To become India's most trusted online platform for discovering
              quality PG accommodations.
            </p>
          </div>

          <div className="mission-card">
            <h3>🤝 Why We Care</h3>

            <p>
              Every student and working professional deserves a safe,
              comfortable, and affordable place to stay.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="why-us">

          <h2>Why Choose Find Your PG?</h2>

          <div className="why-grid">

            <div className="why-card">
              ✔ 100% Verified PG Listings
            </div>

            <div className="why-card">
              ✔ Affordable Monthly Rent
            </div>

            <div className="why-card">
              ✔ Prime Locations Near Colleges & Offices
            </div>

            <div className="why-card">
              ✔ 24×7 Customer Support
            </div>

          </div>

        </div>

        {/* Statistics */}
        <div className="stats">

          <div className="stat">
            <h2>5,000+</h2>
            <p>Happy Students</p>
          </div>

          <div className="stat">
            <h2>1,500+</h2>
            <p>Verified PGs</p>
          </div>

          <div className="stat">
            <h2>25+</h2>
            <p>Cities Covered</p>
          </div>

          <div className="stat">
            <h2>98%</h2>
            <p>Customer Satisfaction</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;