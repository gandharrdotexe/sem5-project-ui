import React from 'react';
import Navbar from './navbar';
import Design from './3ddesign';
import WaitList from './waitList';
import Features from './features';
import Footer from './footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="design">
        <Design />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="waitlist">
        <WaitList />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
