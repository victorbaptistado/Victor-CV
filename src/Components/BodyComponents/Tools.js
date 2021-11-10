import React from 'react'
import { useState } from 'react';
import reactIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/react-icon.png";
import javascriptIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/javascript-icon.png";
import htmlIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/html5-icon.png";
import cssIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/css3-icon.png";
import adobePremiereIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/adobe-premiere-icon.jpg";
import adobePhotoshopIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/adobe-photoshop-icon.png";
import { text } from '@fortawesome/fontawesome-svg-core';


const Tools = ({id, title}) => {

    
    const [texts, setText] = useState([
    {
    about: <>{` Some tools I'm currently familiar with: `}
    <br/><br/>
    <div className="iconsRow">
    <img className="toolIcon" src={reactIcon}></img>
    <img className="toolIcon" src={javascriptIcon}></img>
    <img className="toolIcon" src={htmlIcon}></img>
    <img className="toolIcon" src={cssIcon}></img>
    <img className="toolIcon" src={adobePremiereIcon}></img>
    <img className="toolIcon" src={adobePhotoshopIcon}></img>
    </div>
    </>
    },
    {
    react: 
    <>
    <h3>React</h3>
    {`React is the Javascript library I'm currently using. 
I use hooks to alter states, creating dynamic websites.`}
    </>
    },
    {
    htmlcss: 
    <>
    <h3>Html & Css</h3>
    {`With Html & Css I can create beautiful & responsive websites. 
This website was made entirely by me without use of any html/css templates.`}
    </>
    },
    {
    adobe: 
    <>
    <h3>Adobe Premiere / Photoshop</h3>
    {`These are tools that I'm very familiar with, since my hobbies head towards audio-visual.
Bellow is a piece I worked in audio recording & mixing, video recording & editing (using Adobe Premiere):`}
    <br/><br/>
    <iframe width="100%" height="315" 
    src="https://www.youtube.com/embed/jxDCql_NcoI">
    </iframe>
    </>
    }
    
    ]);
    
    
    
    return (
        <div id={id}>
            <h1>{title}</h1>
            <br/><br/>
    
            {texts.map(text =>
            <div>
            <p>{text.about}</p>
           
            <p>{text.react}</p>
            <p>{text.htmlcss}</p>
            <p>{text.adobe}</p>
            <br/><br/>
            </div>
            )}
            </div>
            
        )
    }


export default Tools
