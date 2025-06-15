import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    emailjs.sendForm(
      'service_htdlauh',        // ✅ Your service ID
      'template_8uggraq',       // ✅ Your template ID
      form.current,
      'GhcP9F6kLfABSfrYc'       // ✅ Your public key
    )
    .then(() => {
      setSuccess('✅ Your message has been sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      console.error('❌ EmailJS Error:', error);  // 🔍 Debug error here
      setError('❌ Something went wrong. Please try again.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title" data-aos="fade-up">Connect With Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="zoom-in">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="tel" name="user_phone" placeholder="Your Phone" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>

        {success && <p className="success-msg">{success}</p>}
        {error && <p className="error-msg">{error}</p>}
      </form>
    </section>
  );
};

export default Contact;
