import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero';


const Landing : React.FC = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <div className='h-dvh bg-black'></div>
    </main>
  );
}

export default Landing
