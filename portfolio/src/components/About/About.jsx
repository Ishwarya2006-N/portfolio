import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className="head">
            <h1>Hey world, I`m Ishwarya</h1>
            <div className="underline"></div>
        </div>
        <div className="content">
            <p>Hi! I'm Ishwarya, a passionate frontend developer who loves building clean, user-friendly websites.
               I enjoy turning ideas into interactive experiences using HTML, CSS, JavaScript, and React.</p>
        </div>
        <div className="content2">
            <p>I'm currently working on real-world projects to sharpen my skills. 
                I'm also confident with Git & GitHub and enjoy collaborating on creative solutions.</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/n-ishwarya-b02602359/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Ishwarya2006-N" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>
        </div>
    </div>
  )
}

export default About