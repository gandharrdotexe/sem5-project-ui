import React from 'react';
import Navbar from './components/navbar'; // Make sure the path is correct
import Design from './components/3ddesign';
import Features from './components/features';
import WaitList from './components/waitList'
import Footer from './components/footer'

function App() {
  return (
    
    <div>
      <Navbar />
      <Design />
      <Features />
      <WaitList />
      <Footer/>

    </div>
  );
}

 export default App;
