import {React, useState, useEffect } from 'react';
import profilePic from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/Profile-Pic.png";
import reactIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/react-icon.png";
import javascriptIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/javascript-icon.png";
import htmlIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/html5-icon.png";
import cssIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/css3-icon.png";
import wordpressIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/wordpress-icon.png";
import adobePremiereIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/adobe-premiere-icon.jpg";
import adobePhotoshopIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/adobe-photoshop-icon.png";
import gitHubIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/github-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import useMediaQuery from "./Hooks/useMediaQuery";



const Header = () => {

    const isMobile = useMediaQuery('(max-width: 960px)');



    const [menuActive, setMenuActive] = useState("");

    const [opacity, setOpacity] = useState(0);
  
  
  /*  const [transition, setTransition] = useState(       
    "1s ease 0.3s"
    );*/
 
    useEffect(() => {

    setOpacity(
    function handle(){
     return 1;
    })  
    },[()=>handle()]);


    function handle () {
       

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

{menuActive}

    {isMobile ? 
        <>
        <div className="headerMobile">
        <button onClick={()=>handle()} className='menuTrigger'>
        <FontAwesomeIcon className='aboutIcon' icon={faEllipsisV}/>
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
            <div className="iconsRow">
            <img className="toolIcon" src={reactIcon}></img>
            <img className="toolIcon" src={javascriptIcon}></img>
            <img className="toolIcon" src={htmlIcon}></img>
            <img className="toolIcon" src={cssIcon}></img>
            <img className="toolIcon" src={wordpressIcon}></img>
            <img className="toolIcon" src={adobePremiereIcon}></img>
            <img className="toolIcon" src={adobePhotoshopIcon}></img>
            <img className="toolIcon" src={gitHubIcon}></img>
            </div>
        </div>
    </div>
    </>
    )
}

export default Header
