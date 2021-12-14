import {React, useState} from 'react';
import phoneIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/phone-call.png";
import emailIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/email.png";
import githubIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/github-1.png";
import locationIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/location-pin.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {


    const [contactInfo, setContactInfo] = useState("")

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
    },
    {
        github: 
        <div className="contactContainer">
        <img className="contactIcon" src={githubIcon}/><a target="_blank" href="https://github.com/victorbaptistado"><h2><span> /victorbaptistado</span></h2></a>
        </div>
    }
    ];
    
    
    
        

    const visible = () =>
    setContactInfo (
        contact.map(contact=> 
      
        <ul>
        
        {contact.phone}
        {contact.email}
        {contact.location}
        {contact.github}
        
        </ul>       
    ))
    
    
    

    return (
     
        <div className="contactsWrapper">

        <p style={{fontSize:"1.5rem", height:"auto"}}>Contact Info</p>


        {contactInfo ? 
        <div>
        <button onClick={() => setContactInfo("")}> 

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

        {contactInfo}


        </div>


    )
}

export default ContactInfo



