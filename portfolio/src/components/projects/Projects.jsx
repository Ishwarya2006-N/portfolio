import React from 'react'
import './Projects.css'
import gitrepo from '../../assets/gitrepo.png'
import jobfinder from '../../assets/jobfinder.png'
import rbooksky from '../../assets/rbooksky.png'
import quiz from '../../assets/quiz.png'
import college from '../../assets/college.png'
import clg from '../../assets/clg.png'
const Projects = () => {
  return (
    <div className='projects'>
        <div className="head">
            <h1>Projects</h1>
        </div>
       <div className="underline"></div>
       <div className="all">
        <div className="one">
            <a href="https://gitrepo-7krj.vercel.app/">
            <img src={gitrepo} alt="project-1" />
            </a>
            <h5>React.js | GitHub API</h5>
            <p>A React app that displays job listings from a mock API using json-server. Users can view available
               job roles and their details.</p>
            <a href="https://gitrepo-7krj.vercel.app/" target="_blank" rel="noopener noreferrer">🌐 Live Demo</a>
             <a href="https://github.com/Ishwarya2006-N/repogit" target="_blank" rel="noopener noreferrer">🛠️ GitHub Link</a>
        </div>
        <div className="one">
          <a href="https://findjob-one.vercel.app/">
          <img src={jobfinder} alt="project2" /></a>
          <h5>React.js | JSON server</h5>
          <p>A React app that displays job listings from a mock API using json-server. Users can view available
             job roles and their details.</p>
             <a href="https://findjob-one.vercel.app/" target="_blank" rel="noopener noreferrer">🌐 Live Demo</a>
             <a href="https://github.com/Ishwarya2006-N/findjob" target="_blank" rel="noopener noreferrer">🛠️ GitHub Link</a>

          
        </div>
        <div className="one">
          <a href="https://rbooksky.vercel.app/">
          <img src={rbooksky} alt="project3" />
          </a>
          <h5>React.js | JSON server</h5>
          <p>A React app to add and manage a list of books using a mock API. Users can input title, author, and description
             through a popup form.</p>
           <a href="https://rbooksky.vercel.app/" target="_blank" rel="noopener noreferrer">🌐 Live Demo</a>
             <a href="https://github.com/Ishwarya2006-N/rbooksky" target="_blank" rel="noopener noreferrer">🛠️ GitHub Link</a>
        </div>
        
        <div className="one">
          <a href="https://deploy-drab-two.vercel.app/">
          <img src={clg} alt="project5" />
          </a>
          <h5>React.js | Responsive</h5>
          <p>Responsive React website for a college layout with components like Navbar, About, Testimonials, Contact & Footer. Built using modern UI.</p>
           <a href="https://deploy-drab-two.vercel.app/" target="_blank" rel="noopener noreferrer">🌐 Live Demo</a>
             <a href="https://github.com/Ishwarya2006-N/quizjson" target="_blank" rel="noopener noreferrer">🛠️ GitHub Link</a>
        </div>
       </div>
    </div>
  )
}

export default Projects