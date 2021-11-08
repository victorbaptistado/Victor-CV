import React from 'react'
import Tools from "./BodyComponents/Tools"
import Projects from "./BodyComponents/Projects"
import AboutMe from "./BodyComponents/AboutMe"
import phoneIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/phone-call.png";
import emailIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/email.png";
import locationIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/location-pin.png";



const Body = () => {
    return (
        <div className="bodyWrapper">
            <div className="bodyContainer1">
            <nav>
            <ul>
            <a href="#tools"><li className="buttons">TOOLS</li></a>
            <a href="#projects"><li className="buttons">PROJECTS</li></a>
            <a href="#aboutMe"><li className="buttons">ABOUT ME</li></a>
            </ul>
            </nav>
            <div className="contactsWrapper">
            <ul>
            <div className="phoneContainer">
           <img className="contactIcon" src={phoneIcon}></img>

           <h2><span>07532-654137</span></h2>
           </div>
           <div className="phoneContainer">
           <img className="contactIcon" src={emailIcon}></img>

           <h2><span>victorbaptistado@gmail.com</span></h2>
           </div>
           <div className="phoneContainer">
           <img className="contactIcon" src={locationIcon}></img>

           <h2><span>United Kingdom, London</span></h2>
           </div>
     
            </ul>
            </div>

           </div>



  


      
            <div className="bodyContainer2">
               <AboutMe id="aboutMe" title={"About"}/>
               <Tools id="tools" title={"Tools"}/>
               <Projects id="projects" title={"Projects"}/>           


            </div>




        </div>
    )
}

export default Body
