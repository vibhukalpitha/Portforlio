import React, { useEffect, useRef, useState } from 'react'
import './About.css'

export default function About({ onNavigate }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.18 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  function handleViewProjects(e) {
    e.preventDefault()
    if (onNavigate) onNavigate('projects')
  }

  return (
    <section id="about" ref={ref} className={`about-section ${visible ? 'is-visible' : ''}`}>
      <div className="about-inner container">
        <div className="about-left">
          <h2 className="about-heading">About Me</h2>

          <p className="about-main">
            Motivated and detail-oriented Information Technology undergraduate with a strong foundation in Python,
 data analytics, and machine learning. Skilled in leveraging large language models (LLMs), data
 preprocessing, feature engineering, and model evaluation to develop intelligent, data-driven solutions.
 Possess hands-on experience in full-stack web development using the MERN stack and Java technologies,
 with a solid understanding of database design and API integration. Adept at collaborating in team
 environments to build secure, scalable, and AI-powered systems. Passionate about applying data science
 and artificial intelligence to solve real-world challenges and currently seeking an internship opportunity in
 data science to gain practical industry experience.
          </p>

          <div className="focus-areas">
            <h4>Focus Areas</h4>
            <ul className="focus-list">
              <li className="focus-item"><span className="check">✓</span>Machine Learning</li>
              <li className="focus-item"><span className="check">✓</span>Natural Language Processing</li>
              <li className="focus-item"><span className="check">✓</span>Data Visualization & Dashboards</li>
              <li className="focus-item"><span className="check">✓</span>Predictive Analytics</li>
              <li className="focus-item"><span className="check">✓</span>AI Projects that create real impact</li>
            </ul>
          </div>

          <div className="about-actions">
            <a className="btn primary" href="/assets/Vibhu Kalpitha.pdf" download>
              Download CV
            </a>
            <button className="btn outline" onClick={handleViewProjects}>View Projects</button>
          </div>
        </div>

        <div className="about-right">
          <div className="about-visual">
            <div className="about-blob" aria-hidden="true"></div>
            <div className="about-art">{/* placeholder illustration */}
              <div className="home-right">
          <div className="image-wrap">
            <img
              src="/assets/profile.jpg"
              alt="Rashmi Jayawardana"
              className="profile-img floating"
              onClick={() => setOpen(true)}
            />
            <div className="blob" aria-hidden="true"></div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-divider" />
    </section>
  )
}
