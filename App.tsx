
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Solutions from './components/Solutions';
import MvpProcess from './components/MvpProcess';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import RelatedContent from './components/RelatedContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#111111] text-white">
      <Header />
      <main>
        <Hero />
        <div className="bg-white text-black">
          <Stats />
          <Services />
        </div>
        <Process />
        <div className="bg-[#F7F7F7] text-black">
          <Solutions />
        </div>
        <MvpProcess />
        <div className="bg-[#F7F7F7] text-black">
          <TechStack />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
