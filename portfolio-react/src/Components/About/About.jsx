import React from 'react'
import './About.css'
// import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    {/* <img className='about-profile-picture' src={profile_img} alt="" /> */}
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Throughout my training, I have developed a strong foundation in both frontend and backend technologies, and I am eager to apply my skills in a professional setting.</p>
                        <p>I began my journey into web development because I was fascinated by how technology can create smooth and interactive user experiences. I started learning on my own but soon realized the need for formal training. To build on my skills and get practical experience, I enrolled in the Fullstack Academy boot camp.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EDUCATION</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>WEB DEVELOPMENT CERTIFICATIONS</p>
                </div>
            </div>
        </div>
    )
}

export default About