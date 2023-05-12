import React, { useState } from "react";

import './ContactForm.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [message, setMessage] = useState('');
    const [formIsCompleted, setFormIsCompleted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        if (emailRegex.test(email)) {
            // The form was submitted and email is valid.
            setFormIsCompleted(true);
        } else {
            setEmailIsValid(false)
        }
    }

    return (
        <>
        {
          formIsCompleted && <p className="successMessage">Your message has been sent! </p>
        }
        {
          !formIsCompleted && 
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <br/>
                <input type="text" id="name" value={name} required onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <br/>
                <input type="email" id="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                {!emailIsValid && <p>Email is invalid</p>}
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <br/>
                <textarea id="message" value={message} required onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
        }
        </>
      );
}

export default ContactForm;