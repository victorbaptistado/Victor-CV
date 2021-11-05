import React from 'react';
import profilePic from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/Profile-Pic.png";
import reactIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/react-icon.png";
import javascriptIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/javascript-icon.png";
import htmlIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/html5-icon.png";
import cssIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/css3-icon.png";




const Header = () => {
    return (

        <div className="headerWrapper"> 
        

   
        <div className="headContainer1">
       <img className="profilePic" src={profilePic}></img> 
       </div>



        <div className="headContainer2">
           <h1 className="profileName">VICTOR BAPTISTA</h1> 

        <div className="iconsRow">
        <img className="toolIcon" src={reactIcon}></img>
        <img className="toolIcon" src={javascriptIcon}></img>
        <img className="toolIcon" src={htmlIcon}></img>
        <img className="toolIcon" src={cssIcon}></img>

        </div>
        </div>


        </div>
    )
}

export default Header
