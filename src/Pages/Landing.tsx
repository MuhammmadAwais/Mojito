import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero';
import Cocktails from '../Components/Cocktails';


const Landing : React.FC = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
    </main>
  );
}

export default Landing
