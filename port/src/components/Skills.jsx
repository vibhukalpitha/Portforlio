import React from 'react'

const programming = ['Python', 'R', 'SQL', 'JavaScript','Java','MERN Stack (MongoDB, Express.js, React.js, Node.js)','C','C++','HTML & CSS']
const dataTools = ['Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Matplotlib / Seaborn', 'Power BI', 'Excel','Illustrator']
const otherTools = ['Git & GitHub', 'VS Code', 'Jupyter Notebook', 'Streamlit']

export default function Skills() {
  return (
    <section id="skills" className="skills fade-in">
      <h3>Skills</h3>
      <div className="skills-grid">
        <div className="skill-card">
          <h4>Programming</h4>
          <ul>
            {programming.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card">
          <h4>Data Science & ML Tools</h4>
          <ul>
            {dataTools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card">
          <h4>Other Tools</h4>
          <ul>
            {otherTools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
