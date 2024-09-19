import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar'; // Make sure the path is correct
import Design from './components/3ddesign';
function App() {
  return (
    
    <div>
      <Navbar />
      <Design />
    </div>

  );
}

 export default App;
