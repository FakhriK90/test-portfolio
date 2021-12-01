import React from 'react'
import photo from './Moi.jpg'
import './about.css'

const About = () => {
    return (
        <div className="moi" id="profile">
            <section className="mine">
        <div className="mine__photo">
          <div className="mine-container">
            <div className="mine-main">
              <img src={photo} alt="Me" />
            </div>
          </div>
        </div>
        <div className="mine__info">
          <div className="title">
            <h1>Hi! I'm</h1>
            <h1>Kahouach Fakhri Abousaoud</h1>
          </div>
          <div className="description">
            <h3>About Me</h3>
            <ul>
              <li>Full Stack JS developper - MERN</li>
              <li>Senior technician: Geophysicist</li>
              <li>First aid worker</li>
              <li>Amateur filmmaker</li>
              <li>Civil society activist</li>
            </ul>
          </div>
        </div>
      </section>
        </div>
    )
}

export default About
