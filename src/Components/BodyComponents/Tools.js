import React from 'react'
import { useState } from 'react';
import reactIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/react-icon.png";
import javascriptIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/javascript-icon.png";
import htmlIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/html5-icon.png";
import cssIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/css3-icon.png";
import wordpressIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/wordpress-icon.png";
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
    <img className="toolIcon" src={wordpressIcon}></img>
    <img className="toolIcon" src={adobePremiereIcon}></img>
    <img className="toolIcon" src={adobePhotoshopIcon}></img>
    <img className="toolIcon" src={githubIcon}></img>
    </div>
    </>
    },
    {
    react: 
    <>
    <h3>React & Javascript</h3>
    <p>{`It's been a while since I started to use them to create dynamic websites. 
React is the Javascript library I'm using the most - 
where my coding's journey is currently heading towards.
Like a hermit, I spend hours devoted to it. Me & my coffee. I love it!`}</p>
    </>
    },
    {
    htmlcss: 
    <>
    <h3>HTML & CSS</h3>
    <p>{`I'm proficient with HTML and CSS.
This website was made with it.
I also use SASS for optimized CSS.`}</p>
    </>
    },
    {
    adobe: 
    <>
    <h3>Adobe Premiere / Photoshop</h3>
    <p>{`
Editing videos with Adobe Premiere is something I really enjoy and I'm very familiar with. 
Music Videos / Lyric Videos / Comedy Videos - that gave me a great knowhow on dealing with computer Softwares.
There are similar features in Premiere which I found a parallel to languages like Javascript/React.js - for exemple: "Keys" to build up animations.
Bellow is a piece I worked on - recording audio & mixing | video recording & editing (using Adobe Premiere):`}</p>
    <br/><br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jxDCql_NcoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
    },
    {
    wordpress: 
    <>
    <h3>Wordpress</h3>
    <p>{`I've been working with wordpress for more than two years. 
That's where my webdev Journey started:
making websites for texts I wrote & for my band.
Here are a few websites I made:`}</p>
    <br/>
  
    <a href="https://kimbowraider.com/" target="_blank">  <img width="50px" src={wordpressIcon}/>Kimbow Raider's website</a>
    <br/><br/>
    <a href="https://victorfugagnoli.blogspot.com/" target="_blank"> <img width="50px" src={wordpressIcon}/>Victor Fugagnoli's website</a>
    
    </>
    },
    {
    github: 
    <>
    <h3>Github</h3>
    <p>{`Github is the version control software I use for managing my projects.
You can check my github on the icon below:`}</p>
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
            {text.wordpress}
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
