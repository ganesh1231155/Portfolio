import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// import { IoPaperPlane } from 'react-icons/io5';

function Contact() {
  const [formData, setFormData] = useState({
    title:'',
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.title,
      message: formData.message,
    };
    emailjs.send(
      'service_184jmys',     // Replace with your EmailJS service ID
      'template_4d9g5me',    // Replace with your EmailJS template ID
      templateParams,
      '4fFX3EJ_bS--G08QB'         // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      },
      (error) => {
        console.log(error);
        alert('Failed to send email');
      }
    );
    // You might clear the form or show a success message
    // setFormData({ fullname: '', email: '', message: '' });
  };

  const isFormValid = formData.name &&  formData.email && formData.title &&formData.message;

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.7870995186104!2d73.78609939448121!3d18.60028474861179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91b942a806f%3A0xdcf50d64dd9af69c!2sGreenlands%20Society!5e0!3m2!1sen!2sin!4v1748272858080!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </figure>
      </section>
      


      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <input
              type="text"
              name="title"
              className="form-input"
              style={{marginBottom:"10px"}}
              placeholder="Title"
              required
              value={formData.title}
              onChange={handleChange}
            />
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button className="form-btn" type="submit" disabled={!isFormValid}>
            {/* <ion-icon name="paper-plane"></ion-icon> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M470.6 105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 201.2L58.6 67.8c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L13.4 389.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 310.8l133.4 133.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.2 256L470.6 105.4z"/></svg>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;