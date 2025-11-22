import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Predicting Viral Content On Social Media ',
    subtitle: 'Machine Learning',
    desc: ' Developed an AI-powered system that predicts the virality potential of social media videos using NLP andpredictive modeling, providing actionable insights to help creators optimize video features for maximum engagement.',
    tech: 'Tech Stack: Python, LLMs',
    github: 'https://github.com/vibhukalpitha/Predicting_Viral_content_on_Social_Media.git',
    live: 'https://www.linkedin.com/posts/vibhu-kalpitha-62a74130a_machinelearning-datascience-contentcreation-activity-7389679380324757504-I4Mg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7GgkIB7D4HabGCKnssjNeSkN0BZ1YA8Iw'
  },
  {
    id: 2,
    title: ' Product Launch Planner with AI',
    subtitle: 'APIs',
    desc: ' Developed an AI-powered system that predicts the virality potential of social media videos using NLP and predictive modeling, offering actionable insights to help creators optimize video features for greater reach and engagement.',
    tech: 'Python, LLMs',
    github: 'https://github.com/vibhukalpitha/Product-Launch-Planner-Y3.git',
    live: 'https://www.linkedin.com/posts/vibhu-kalpitha-62a74130a_ai-dataanalytics-marketingstrategy-activity-7390002346958925824-D4Xh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7GgkIB7D4HabGCKnssjNeSkN0BZ1YA8Iw'
  },
  {
    id: 3,
    title: ' Agri Waste Management System ',
    
    desc: "DDesigned and implemented a secure finance management module with integrated payment gateways, collaborating within a team to build a full-stack MERN application ensuring seamless data flow between frontend and backend.esigned an interactive dashboard that predicts future revenue using time-series forecasting with ARIMA/Prophet.",
    tech: 'MERN (MongoDB, Express.js, React.js, Node.js',
    github: 'https://github.com/nethal17/Agri-Waste-Marketplace',
    live: '#'
  },
  {
    id: 4,
    title: ' Online Bidding System',
    
    desc: " Developed a web-based real-time bidding platform with a complete user management module, including registration, authentication, and role-based access control, enabling secure item listing, live bidding, and dynamic updates.",
    tech: 'Java, MySQL, JSP/Servlets',
   
  },
  {
    id: 5,
    title: 'Online Home and Land Selling Website ',
    
    desc: " Developed a home selling module enabling users to post property listings with images and details,incorporating search and filtering features for location, price, and property type."
,
    tech: ' HTML, CSS, JavaScript, PHP, MySQL',
   
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects fade-in">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-body">
              <h4>{p.title}</h4>
              <div className="project-sub">{p.subtitle}</div>
              <p>{p.desc}</p>
              <div className="project-tech"><strong>Tech:</strong> {p.tech}</div>
            </div>
            <div className="project-footer">
              <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn ghost" href={p.live} target="_blank" rel="noreferrer">View Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
