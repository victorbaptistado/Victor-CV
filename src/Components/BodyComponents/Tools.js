import React from 'react'
import { useState } from 'react';
import reactIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/react-icon.png";
import javascriptIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/javascript-icon.png";
import htmlIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/html5-icon.png";
import cssIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/css3-icon.png";
import adobePremiereIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/adobe-premiere-icon.jpg";
import adobePhotoshopIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/adobe-photoshop-icon.png";
import githubIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/github-icon.png";
import githubIcon2 from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/github-icon2.png";


const Tools = ({id, title}) => {

    
    const [texts, setText] = useState([
    {
    about: <>
    <p>Some tools I'm currently familiar with:</p>
    <br/><br/>
    <div className="iconsRow">
    <img className="toolIcon" src={reactIcon}></img>
    <img className="toolIcon" src={javascriptIcon}></img>
    <img className="toolIcon" src={htmlIcon}></img>
    <img className="toolIcon" src={cssIcon}></img>
    <img className="toolIcon" src={adobePremiereIcon}></img>
    <img className="toolIcon" src={adobePhotoshopIcon}></img>
    <img className="toolIcon" src={githubIcon}></img>
    </div>
    </>
    },
    {
    react: 
    <>
    <h3>React</h3>
    <p>React is the Javascript library I'm currently using. 
    I use hooks to alter states, creating dynamic websites.</p>
    </>
    },
    {
    htmlcss: 
    <>
    <h3>Html & Css</h3>
    <p>With Html & Css I can create beautiful & responsive websites. 
This website was made entirely by me without use of any html/css templates.</p>
    </>
    },
    {
    adobe: 
    <>
    <h3>Adobe Premiere / Photoshop</h3>
    <p>These are tools that I'm very familiar with, since my hobbies head towards audio-visual.
Bellow is a piece I worked in audio recording & mixing, video recording & editing (using Adobe Premiere):</p>
    <br/><br/>
    <iframe width="100%" height="315" 
    src="https://www.youtube.com/embed/jxDCql_NcoI">
    </iframe>
    </>
    },
    {
    github: 
    <>
    <h3>Github</h3>
    <p>Git hub is the version control software I use for managing my projects.
You can check my github on the icon below:</p>
    <a href="https://github.com/victorbaptistado" target="_blank"><img width="50px"  src={githubIcon2}/></a>
    
</>
        }
    
    ]);
    
    
    
    return (
        <div className="sessionContainer" id={id}>
            <h1>{title}</h1>
            <br/><br/>
    
            {texts.map(text =>
            <div>
            {text.about}
            {text.react}
            {text.htmlcss}
            {text.adobe}
            <br/>
            {text.github}
            <br/><br/>
            </div>
            )}
            <br/>
            <hr/>
            </div>
            
        )
    }


export default Tools
