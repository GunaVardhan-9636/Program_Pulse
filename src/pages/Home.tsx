import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Curriculum from '../components/Curriculum';
import Alumni from '../components/Alumni';
import Faculty from '../components/Faculty';
import CareerServices from '../components/CareerServices';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Curriculum />
      <Alumni />
      <Faculty />
      <CareerServices />
    </>
  );
};

export default Home;