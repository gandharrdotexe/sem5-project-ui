import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar'; // Make sure the path is correct
import Design from './components/3ddesign';
import Features from './components/features';
import SimpleAnimation from './components/simpleanimation';
function App() {
  return (
    
    <div>
      <Navbar />
      <Design />
      <Features />
      {/* <SimpleAnimation/> */}
    </div>

  );
}

 export default App;
