import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/profile_img_jeffrey.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='profile-picture' src={profile_img} alt=''></img>
        <h1><span>I'm Jeffrey Haymes,</span>Fullstack developer based in Illinois.</h1>
        <p>I am a dedicated and passionate Fullstack Web Developer who recently graduated from a web development boot camp at the University of Illinois Chicago in collaboration with Fullstack Academy. </p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset='50' href='#contact'>Connect with me</AnchorLink></div>
          <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero