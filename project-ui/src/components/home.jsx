import React from 'react';
import Navbar from './navbar';     // Correct relative path
import Design from './3ddesign';   // Correct relative path
import WaitList from './waitList'; // Correct relative path
import Features from './features'; // Correct relative path
import Footer from './footer';     // Correct relative path

const Home = () => {
  return (
    <div>
      <Navbar />
      <Design />
      <Features />
      <WaitList />
      <Footer />
    </div>
  );
};

export default Home;
