import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
      <Footer/>
      <Link to={'/Contact'}>Go to contact form</Link>
    </Router>
  </React.StrictMode>
)
