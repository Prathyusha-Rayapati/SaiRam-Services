import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'; // Import your CSS file for ContactUs styles
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hno: '',
    reason: ''
  });

  useEffect(() => {
    emailjs.init('7FXhvCZdGk8uvMCuO'); // Initialize EmailJS with your USER_ID
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_r4zaixq', // Replace with your EmailJS Service ID
      'template_mjm5v7a', // Replace with your EmailJS Template ID
      formData
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="contact-us-container">
      <div className="animated-background"></div>
      <h2>Contact Us</h2>
      <div className="contact-info">
      <p><FaPhone /> Phone: (251) 376-8090</p>
        <p><FaEnvelope /> Email: info@pesticideservices.com</p>
        <p><FaMapMarkerAlt /> Address: 123 Pesticide Lane, MOBILE, AL 36608</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hno">Phone Number</label>
          <input
            type="text"
            id="hno"
            name="hno"
            value={formData.hno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
