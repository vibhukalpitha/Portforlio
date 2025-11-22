import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal'
import './Home.css'

export default function Hero({ onNavigate }) {
  const [open, setOpen] = useState(false)
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  function handleContact(e) {
    e.preventDefault()
    if (onNavigate) onNavigate('contact')
  }

  function handleScrollToAbout(e) {
    e.preventDefault()
    if (onNavigate) onNavigate('about')
  }

  return (
    <section id="home" ref={sectionRef} className={`home-section ${visible ? 'is-visible' : ''}`}>
      <div className="home-inner container">
        <div className="home-left card-glass">
          <h1 className="home-name">Vibhu Kalpitha</h1>
          <div className="home-sub">Data Science Undergraduate</div>
          <p className="home-intro">
            Hi, I’m Vibhu Kalpitha, a Data Science undergraduate at SLIIT.
I’m passionate about uncovering insights from data, building machine learning models, and creating
 AI solutions that solve real problems.
 I enjoy learning new tools and experimenting with modern technologies to bring ideas to life.
          </p>

          <div className="home-actions">
            <a className="btn primary" href="/assets/Vibhu Kalpitha.pdf" download>
              Download CV
            </a>
            <button className="btn outline" onClick={handleContact}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="home-right">
          <div className="image-wrap">
            <img
              src="/assets/profile.jpg"
              alt="Vibhu Kalpitha"
              className="profile-img floating"
              onClick={() => setOpen(true)}
            />
            <div className="blob" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={handleScrollToAbout} aria-hidden>
        <span className="arrow" />
      </div>

      {open && <Modal onClose={() => setOpen(false)} src={'/assets/profile.jpg'} />}
    </section>
  )
}
