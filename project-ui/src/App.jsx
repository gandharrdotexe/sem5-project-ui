import React from 'react';
import Navbar from './components/navbar'; // Make sure the path is correct
import Design from './components/3ddesign';
import Features from './components/features';
import WaitList from './components/waitList'

function App() {
  return (
    
    <>
      <Navbar />
      <Design />
      <Features />
      <WaitList />

    </>
  );
}

 export default App;
