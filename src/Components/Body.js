import React from 'react'
import Tools from "./BodyComponents/Tools"
import Projects from "./BodyComponents/Projects"
import AboutMe from "./BodyComponents/AboutMe"
import phoneIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/phone-call.png";
import emailIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/email.png";
import locationIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/location-pin.png";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Body = () => {



const [noContact, setVisible] = useState("")

const contact =
[
{
    phone:    
    <div className="contactContainer">
    <img className="contactIcon" src={phoneIcon}/><h2><span>07532-654137</span></h2>
    </div>

},
{
    email:  
    <div className="contactContainer">
    <img className="contactIcon" src={emailIcon}/> <h2><span>victorbaptistado@gmail.com</span></h2>
    </div>
},
{
    location: 
    <div className="contactContainer">
    <img className="contactIcon" src={locationIcon}/><h2><span>United Kingdom, London</span></h2>
    </div>
}
];


const visible = () =>
setVisible (
    contact.map(contact=> 
  
    <ul>
    
    {contact.phone}
    {contact.email}
    {contact.location}
    
    </ul>       
))



    return (
        <div className="bodyWrapper"> 
        
        
            <div className="bodyContainer1" >
            <nav>
            <ul>
            <a href="#aboutMe"><li className="buttons"><b>ABOUT ME</b></li></a>
            <a href="#tools"><li className="buttons"><b>TOOLS</b></li></a>
            <a href="#projects"><li className="buttons"><b>PROJECTS</b></li></a>
            </ul>
            </nav>


            <div className="contactsWrapper">



        <p>Contact Info</p>
        

        {noContact ? 
        <div>
        <button onClick={() => setVisible("")}> 
      
        <FontAwesomeIcon icon={faMinusCircle} style={{color: "black"}}/>
        </button>
        </div>
        :
        <div> 
        <button onClick={() => visible()}> 
        <FontAwesomeIcon icon={faPlusCircle} style={{color: "black"}}/>
        </button>
        </div>
        
        }      
        
        {noContact}
        
      
           </div>
        </div>


      
            <div className="bodyContainer2" onClick={() => setVisible("")}>
               <div className="sessionContainer">
               <AboutMe id="aboutMe" title={"About"}/>
               </div>
               <div className="sessionContainer">
               <Tools id="tools" title={"Tools"}/>
               </div>
               <div className="sessionContainer">
               <Projects id="projects" title={"Projects"}/>           
               </div>

            </div>




        </div>
    )
}

export default Body
