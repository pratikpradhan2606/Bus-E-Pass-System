import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/v1/movies/contact', formData);
      console.log('Message sent:', response.data);
      // Reset form fields after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
