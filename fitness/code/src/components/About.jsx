import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/about-Img.png'

const About = () => {
  return (
    <section className='about-container' id='about'>
      
      <div className="about-image">
        <img src={aboutImg} alt="About SB Fitzz vibe" />
      </div>

      <div className="about-text">
        <span className="about-header">
          <div className="about-line" />
          <h5>About Us</h5>
        </span>
        <h2>Embark on a Fitness Odyssey with <span className="highlight">SB Fitzz vibe</span></h2>
        <p>
          Welcome to <b>SB Fitzz vibe</b>, where the beat of cutting-edge workouts 
          harmonizes with the contagious enthusiasm of a community that feels like family. 
          Our mission is to help you unleash your <span className="highlight">full potential</span>, 
          one energizing workout at a time. This journey isn’t just about exercise—it’s about 
          <i> self-discovery, empowerment, and transformation</i>.  
        </p>
        <button className="about-btn">Join the Movement</button>
      </div>

    </section>
  )
}

export default About
