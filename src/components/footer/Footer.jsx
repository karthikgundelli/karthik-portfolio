import React, { useEffect } from 'react';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <h3>Let's Connect</h3>
      <div className="social-icons">
        <a
          href="https://wa.me/6281062845"
          target="_blank"
          rel="noopener noreferrer"
          className="icon whatsapp"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="karthikgundelly4@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon email"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/gundelli-karthik-598b71243/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Karthik Gundelly. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
