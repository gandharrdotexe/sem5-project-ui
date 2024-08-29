import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar'; // Make sure the path is correct

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  return (
    // <Router>
      <Navbar />
      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/about" element={<About />} />
      //   <Route path="/services" element={<Services />} />
      //   <Route path="/contact" element={<Contact />} />
      //   {/* Add more routes as needed */}
      // </Routes>
    // </Router>
  );
}

export default App;

// Example components for routing (replace these with your actual components)
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Services() {
  return <h1>Services Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}