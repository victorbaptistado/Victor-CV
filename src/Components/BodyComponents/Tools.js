import React from 'react'
import { useState } from 'react';
import reactIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/react-icon.png";
import javascriptIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/javascript-icon.png";
import htmlIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/html5-icon.png";
import cssIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/css3-icon.png";
import adobePremiereIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/adobe-premiere-icon.jpg";
import adobePhotoshopIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/adobe-photoshop-icon.png";


const Tools = ({id, title}) => {

    
    const [texts, setText] = useState([
        {
        about: ` `
    
    },

    
    
    ]);
    
    
    
    return (
        <div id={id}>
            <h1>{title}</h1>
            <br/><br/>
    
            {texts.map(text =>
            <div>
            <p>{text.about}</p>
            
        <div className="iconsRow">
        <img className="toolIcon" src={reactIcon}></img>
        <img className="toolIcon" src={javascriptIcon}></img>
        <img className="toolIcon" src={htmlIcon}></img>
        <img className="toolIcon" src={cssIcon}></img>
        <img className="toolIcon" src={adobePremiereIcon}></img>
        <img className="toolIcon" src={adobePhotoshopIcon}></img>
        </div>
            <br/>
            </div>
            )}
            </div>
            
        )
    }


export default Tools
