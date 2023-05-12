import React, { useState } from "react";

import './ContactForm.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        if (emailRegex.test(email)) {
            setEmailIsValid(true)
        }else {
            setEmailIsValid(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} required onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            {!emailIsValid && <p>Email is invalid</p>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} required onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      );
}

export default ContactForm;