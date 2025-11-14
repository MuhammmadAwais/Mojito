import gsap from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText)

import React from 'react'
import Landing from './Pages/Landing'

const App : React.FC = () => {
  return (
    <div>
      <Landing />
    </div>
  )
}

export default App
