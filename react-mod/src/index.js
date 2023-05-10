import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <p> I am the header </p>
      <Routes>
        <Route path="/" element={<p>I am at the root </p>} />
        <Route path="/contact" element={<p>I am on the contact me page</p>} />
        <Route path="/resume" element={<p>I am on the resume page</p>} />
      </Routes>
      {/* 
        <Routes>
          <Route path="/" element={<AboutMe/>} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      */}
      <p> I am the footer </p>
      <Link to={'/contact'}>Go to contact form</Link>
    </Router>
  </React.StrictMode>
)
