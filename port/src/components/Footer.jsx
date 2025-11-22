import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="logo-small">RJ</div>
          <div className="footer-copy">© {new Date().getFullYear()} Rashmi Jayawardana</div>
        </div>

        <div className="footer-center">
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-right">
          <a className="social" href="#" aria-label="LinkedIn">LinkedIn</a>
          <a className="social" href="#" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
