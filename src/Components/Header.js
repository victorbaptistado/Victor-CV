import {React, useState, useEffect } from 'react';
import profilePic from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/Profile-Pic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faChevronCircleUp, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import useMediaQuery from "./Hooks/useMediaQuery";
import SkillsIcons from './BodyComponents/SkillsIcons';


import linkedinIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/linkedin-icon.png";
import phoneIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/phone-call.png";
import emailIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/email.png";
import githubIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/github-1.png";
import locationIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/location-pin.png";




const Header = () => {

    const isMobile = useMediaQuery('(max-width: 960px)');

    const [menuActive, setMenuActive] = useState("");
    const [mobileContact, setMobileContact] = useState("")
    const [opacity, setOpacity] = useState(0);
    
  
  /*  const [transition, setTransition] = useState(       
    "1s ease 0.3s"
    );*/
 

    function handleContacts () {
        setMobileContact(         
        <div style={{opacity:`${opacity}`}} className='' >
        <button className='closeMenu' onClick={()=>setMobileContact("")}><FontAwesomeIcon icon={faChevronCircleUp}/></button>
 
        <img className="" src={linkedinIcon}/><a target="_blank" href="https://www.linkedin.com/in/vicbaptista/"><h2><span> /victorbaptistado</span></h2></a>
 
        <img className="" src={phoneIcon}/><h2><span>07532-654137</span></h2>

        <img className="" src={emailIcon}/> <h2><span>victorbaptistado@gmail.com</span></h2>
 
        <img className="" src={locationIcon}/><h2><span>United Kingdom, London</span></h2>

        <img className="" src={githubIcon}/><a target="_blank" href="https://github.com/victorbaptistado"><h2><span> /victorbaptistado</span></h2></a>

        </div>
    
    

      
        )
    }
    useEffect(() => {

        setOpacity(
        function handleMenu(){
         return 1;
        })  
        },[()=>handleMenu()]);
    



    function handleMenu () {
        setMenuActive(         
        <div style={{opacity:`${opacity}`}} className='menuActive' >
        <nav>
        <ul>
        <button className='closeMenu' onClick={()=>setMenuActive("")}><FontAwesomeIcon icon={faChevronCircleUp}/></button>
        <a href="#aboutMe" onClick={()=>setMenuActive("")}><li className="mobileButtons"><b>ABOUT ME</b></li></a>
        <a href="#tools" onClick={()=>setMenuActive("")}><li className="mobileButtons"><b>TOOLS</b></li></a>
        <a href="#youtubeChannel" onClick={()=>setMenuActive("")}><li className="mobileButtons"><b>YOUTUBE CHANNEL</b></li></a>
        <a href="#projects" onClick={()=>setMenuActive("")}><li className="mobileButtons"><b>PROJECTS</b></li></a>
        </ul>
        </nav>
        </div>
        )
    }

    return (
    <>
    {mobileContact}
    {menuActive}

    {isMobile ? 
        <>
        <div className="headerMobile">

        <button onClick={()=>handleContacts()} className='contactTrigger'>
        <FontAwesomeIcon icon={faUserCircle}/>
        </button>

        <h4>Victor</h4>

        <button onClick={()=>handleMenu()} className='menuTrigger'>
        <FontAwesomeIcon icon={faEllipsisV}/>
        </button>
        </div></> : ""}

    <div className="headerWrapper" > 

        <div className="headContainer1">
            <img className="profilePic" src={profilePic}></img> 
        </div>

        <div className="headContainer2">
            <div className="aboutMeHeader">
                <h2>&lt;h1&gt;Hermit of Code&lt;h1&gt;</h2>
                <p style={{textAlign: "left"}}>&lt;p&gt;On my Long and Winding journey to develop. &lt;p&gt;</p>
            </div>
            <h1 className="profileName">VICTOR BAPTISTA</h1> 
            <SkillsIcons/>
        </div>
    </div>
    </>
    )
}

export default Header
