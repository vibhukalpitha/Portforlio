import React from 'react'

export default function Header({ activeSection, onNavigate }) {
  function handleClick(e, id) {
    e.preventDefault()
    if (onNavigate) onNavigate(id)
  }

  return (
    <header className="site-header nav-root header-glass">
      <div className="nav-inner">
        <div className="brand cluster">
          <div className="logo" aria-hidden>
            <img
              src="/assets/profile.jpg"
              
              className="profile-img "
              
            />
          </div>
          <div>
            <a href="#home" onClick={(e) => handleClick(e, 'home')} className="brand-link">
              <span className="brand-name">Vibhu Kalpitha</span>
            </a>
            <div className="brand-sub">Data Science Undergraduate</div>
          </div>
        </div>

        <nav className="main-nav">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => handleClick(e, 'home')}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleClick(e, 'about')}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => handleClick(e, 'skills')}>Skills</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => handleClick(e, 'projects')}>Projects</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleClick(e, 'contact')}>Contact</a>
        </nav>

        <div className="header-right">
          <a className="social" href="https://www.linkedin.com/in/vibhu-kalpitha-62a74130a/" title="LinkedIn" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4.5A2 2 0 1 1 4 8.5A2 2 0 0 1 4 4.5Z" stroke="#0b63d1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 10.5H6V20H2V10.5Z" stroke="#0b63d1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 13.5V20H14V14.8C14 12.3 20 12.1 20 16V20H16V14.5" stroke="#0b63d1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a className="social" href="https://github.com/vibhukalpitha" title="GitHub" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7.03 2 3 6.03 3 11c0 4 2.53 7.4 6.03 8.6.44.08.6-.2.6-.43 0-.21-.01-.77-.01-1.52-2.45.53-2.97-1.18-2.97-1.18-.4-1.02-.98-1.29-.98-1.29-.8-.55.06-.54.06-.54.89.06 1.36.92 1.36.92.79 1.35 2.07.96 2.57.73.08-.57.31-.96.56-1.18-1.96-.22-4.02-.98-4.02-4.36 0-.96.34-1.74.9-2.36-.09-.23-.39-1.15.09-2.4 0 0 .74-.24 2.42.9A8.4 8.4 0 0 1 12 6.8c.75.003 1.5.1 2.2.29 1.68-1.14 2.42-.9 2.42-.9.48 1.25.18 2.17.09 2.4.56.62.9 1.4.9 2.36 0 3.39-2.06 4.13-4.02 4.35.31.27.58.8.58 1.62 0 1.17-.01 2.12-.01 2.41 0 .24.16.52.61.43C18.47 18.4 21 15 21 11c0-4.97-4.03-9-9-9Z" stroke="#0b63d1" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </header>
  )
}
