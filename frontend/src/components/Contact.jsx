import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import contact from '../assets/images/contact.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const { name, email, phone, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('https://portfolio-mu-liard-78.vercel.app/api/contact', formData);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
        } catch (err) {
            setStatus('Failed to send message. Please try again.');
            setTimeout(() => setStatus(''), 3000);
        }
    };


  return (
    <section id="contact" className="container">
      <div className="card split-layout">
        <div className="left-pane contact-left">
          <h2>My Contact</h2>
          <img src={contact} alt="Contact me" className="contact" />
          <div className="contact-info">
            <p>📧 satyajit97531@gmail.com</p>
            <p>📞 +91 8076522382</p>
            <p>🔗 www.linkedin.com/in/satyajit-samanta-07a461385</p>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={name} onChange={onChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value={phone} onChange={onChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="4" value={message} onChange={onChange} required></textarea>
            </div>
            <button type="submit" className="btn-primary">Submit</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;