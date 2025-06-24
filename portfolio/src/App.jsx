import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
 
  return (
    <div>
     <Navbar/>
     <About/>
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
