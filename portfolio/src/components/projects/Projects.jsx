import React from 'react'
import './Projects.css'
import gitrepo from '../../assets/gitrepo.png'
import jobfinder from '../../assets/jobfinder.png'
import rbooksky from '../../assets/rbooksky.png'
import quiz from '../../assets/quiz.png'
import college from '../../assets/college.png'
const Projects = () => {
  return (
    <div className='projects'>
        <div className="head">
            <h1>Projects</h1>
        </div>
       <div className="underline"></div>
       <div className="all">
        <div className="one">
            <a href="https://github.com/Ishwarya2006-N/gitrepo">
            <img src={gitrepo} alt="project-1" />
            <h5>React.js | GitHub API</h5>
            <p>A React app that displays job listings from a mock API using json-server. Users can view available
               job roles and their details.</p>
            </a>
        </div>
        <div className="one">
          <a href="https://github.com/Ishwarya2006-N/jobex">
          <img src={jobfinder} alt="project2" />
          <h5>React.js | JSON server</h5>
          <p>A React app that displays job listings from a mock API using json-server. Users can view available
             job roles and their details.</p>
          </a>
        </div>
        <div className="one">
          <a href="https://github.com/Ishwarya2006-N/rbooksky">
          <img src={rbooksky} alt="project3" />
          <h5>React.js | JSON server</h5>
          <p>A React app to add and manage a list of books using a mock API. Users can input title, author, and description
             through a popup form.</p>
          </a>
        </div>
        <div className="one">
          <a href="https://github.com/Ishwarya2006-N/quizjson">
          <img src={quiz} alt="project4" />
          <h5>React.js | JSON server</h5>
          <p>A React quiz app that fetches questions from a mock API using json-server. 
            Users can select answers, submit the quiz, and view their score instantly.</p>
          </a>
        </div>
        <div className="one">
          <a href="https://github.com/Ishwarya2006-N/quizjson">
          <img src={college} alt="project5" />
          <h5>React.js | Responsive</h5>
          <p>Responsive React website for a college layout with components like Navbar, About, Testimonials, Contact & Footer. Built using modern UI.</p>
          </a>
        </div>
       </div>
    </div>
  )
}

export default Projects