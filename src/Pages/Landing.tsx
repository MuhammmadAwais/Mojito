import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero';
import Cocktails from '../Components/Cocktails';
import About from '../Components/About';
import Art from '../Components/Art';
import Menu from '../Components/Menu';


const Landing : React.FC = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
}

export default Landing
