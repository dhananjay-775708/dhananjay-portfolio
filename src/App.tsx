import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
