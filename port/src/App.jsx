import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useState } from 'react'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app-root">
      <div className="container">
        <Header activeSection={activeSection} onNavigate={(id) => setActiveSection(id)} />
        <main>
          <div className={activeSection === 'home' ? 'section-visible' : 'section-hidden'}>
            <Hero onNavigate={(id) => setActiveSection(id)} />
          </div>

          <div className={activeSection === 'about' ? 'section-visible' : 'section-hidden'}>
            <About onNavigate={(id) => setActiveSection(id)} />
          </div>

          <div className={activeSection === 'skills' ? 'section-visible' : 'section-hidden'}>
            <Skills />
          </div>

          <div className={activeSection === 'projects' ? 'section-visible' : 'section-hidden'}>
            <Projects />
          </div>

          <div className={activeSection === 'contact' ? 'section-visible' : 'section-hidden'}>
            <Contact />
          </div>
        </main>
      </div>
    </div>
  )
}
