import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero';
import Cocktails from '../Components/Cocktails';
import About from '../Components/About';


const Landing : React.FC = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}

export default Landing
