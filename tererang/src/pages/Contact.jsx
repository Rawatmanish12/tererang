// import React from 'react'

// export default function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }
import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out to us through any of the ways below.</p>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div>
          <h3>📍 Address</h3>
          <p>123 Fashion Street, Noida, Uttar Pradesh, India</p>
        </div>
        <div>
          <h3>📞 Phone</h3>
          <p>+91 9876543210</p>
        </div>
        <div>
          <h3>📧 Email</h3>
          <p>support@tererang.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <h2>Send us a message</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
