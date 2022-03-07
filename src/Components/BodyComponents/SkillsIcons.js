import React from 'react';
import reactIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/react-icon.png";
import javascriptIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/javascript-icon.png";
import typescriptIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/typescript-icon.png";
import htmlIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/html5-icon.png";
import cssIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/css3-icon.png";
import wordpressIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/wordpress-icon.png";
import adobePremiereIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/adobe-premiere-icon.jpg";
import adobePhotoshopIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/adobe-photoshop-icon.png";
import gitHubIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/github-icon.png";


const SkillsIcons = () => {
    return (
        <div>
            <div className="iconsRow">
            <img className="toolIcon" src={javascriptIcon}></img>
            <img className="toolIcon" src={reactIcon}></img>
            <img className="toolIcon" src={typescriptIcon}></img>
            <img className="toolIcon" src={htmlIcon}></img>
            <img className="toolIcon" src={cssIcon}></img>
            <img className="toolIcon" src={wordpressIcon}></img>
            <img className="toolIcon" src={adobePremiereIcon}></img>
            <img className="toolIcon" src={adobePhotoshopIcon}></img>
            <img className="toolIcon" src={gitHubIcon}></img>
            </div>  
        </div>
    )
}

export default SkillsIcons
