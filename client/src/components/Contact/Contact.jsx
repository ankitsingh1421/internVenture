import React, { useRef, useState } from 'react';
import './Contact.css';
import Typed from 'typed.js';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const Contact = () => {
  const el = useRef(null);
  const form = useRef();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(el.current, {
      strings: ["How we can help you ?", "Feel free to get in touch with us."],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  
    const email = e.target.email.value;
    const name = e.target.name.value;
    const message = e.target.message.value;
  

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
      )
      .then(
        (result) => {
          setSuccess('Your message has been sent successfully! We will response you as soon as possible.');
          form.current.reset(); 
        },
        (error) => {
          setError('Failed to send the message. Please try again later.');
        }
      );
  };



  // alert message
     let alertMessage = (val,status) => {
      Swal.fire({
        title:"Success!",
        text:val,
        icon:status,
        timer:3000,
        confirmButtonText:'OK',
      })
     }
  
  return (
    <div id="contact" className="contact-section-home p-10 pt-28 text-gray-900 dark:text-white transition-colors duration-300">
      <h2 className="text-5xl font-bold mb-6 text-center animate-fade-in-down">Contact Us</h2>
      <p className="contact-description text-center mb-10 text-lg animate-fade-in-up">
        Welcome! Thanks for contacting us. <span ref={el}></span>
      </p>
      <form ref={form} className="contact-form-home max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
  <div className="form-group">
    <input type="text" id="name" name="from_name" placeholder="Your Name" className="input-field" required />
  </div>
  <div className="form-group">
    <input type="email" id="email" name="from_email" placeholder="Your Email" className="input-field" required />
  </div>
  <div className="form-group">
    <textarea id="message" name="message" placeholder="Your Message" className="input-field resize-none h-32" required></textarea>
  </div>
  {error && <p className="text-red-500 text-center">{alertMessage(error,'error')}</p>}
  {success && <p className="text-green-500 text-center">{alertMessage(success,'success')}</p>}
  <button type="submit" className="submit-btn w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
    Send Message
  </button>
</form>
    </div>
  );
};

export default Contact;