import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      <div className="container">

        {/* Header */}

        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1>Contact Us</h1>

          <p>
            Have questions about a PG or need help finding
            your perfect accommodation? We'd love to hear from you.
          </p>

        </motion.div>

        {/* Contact Cards */}

        <div className="contact-info">

          <div className="info-card">
            <FaMapMarkerAlt />

            <h3>Address</h3>

            <p>
              Anna Nagar,
              Chennai, Tamil Nadu
            </p>
          </div>

          <div className="info-card">
            <FaPhoneAlt />

            <h3>Phone</h3>

            <p>+91 9876543210</p>
          </div>

          <div className="info-card">
            <FaEnvelope />

            <h3>Email</h3>

            <p>support@findyourpg.com</p>
          </div>

        </div>

        {/* Contact Form */}

        <div className="contact-container">

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2>Send us a Message</h2>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </motion.form>

          <motion.div
            className="map-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <iframe
              title="Find Your PG Location"
              src="https://www.google.com/maps?q=Anna+Nagar+Chennai&output=embed"
              loading="lazy"
            ></iframe>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Contact;