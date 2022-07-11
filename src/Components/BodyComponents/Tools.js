import React from 'react'
import { useState } from 'react';
import wordpressIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/wordpress-icon.png";
import githubIcon2 from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/github-icon2.png";
import SkillsIcons from './SkillsIcons';


const Tools = ({id, title}) => {

    
    const [texts, setText] = useState([
    {
        about:
        <>
            <p>Tools I'm currently familiar with:</p>
            <SkillsIcons/>
        </>
        },
    {
    react: 
        <div>
            <h3>Javascript / React.js / Typescript</h3>
            <p>It's been a while since I started with Javascript.</p>
            <p>React.js is the library I use (this CV-website was built with it) and Typescript. I'm also familiar with React Native, 
                having worked commercially with both Android and IOS.
                Like a hermit, I spend hours devoted to it. Me & my coffee. I love it.
            </p>
        </div>
    },
    {
    htmlcss: 
    <div>
    <h3>HTML & CSS</h3>
        <p>I'm proficient with HTML and CSS.
            This website was made with it.
            I also use SASS for optimized CSS.
        </p>
    </div>
    },
    {
    adobe: 
    <>
    <div style={{marginBottom: 20}}>
        <h3>Adobe Premiere / Photoshop</h3>
        <p>Editing videos with Adobe Premiere is something I really enjoy and I'm very familiar with. 
            Music Videos / Lyric Videos / Comic Videos.
        </p>
    </div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jxDCql_NcoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
    },
    {
    wordpress: 
    <>
    <h3>Wordpress</h3>
        <p>I've been working with wordpress for more than two years. That's where my webdev Journey started: 
        making websites for texts I wrote & for my band.
        Here are a few websites I made:</p>
    <ul>
        <li><a href="https://kimbowraider.com/" target="_blank" className='wordpressList'>  <img width="20px" src={wordpressIcon}/>Kimbow Raider's website</a></li>
        <li><a href="https://victorfugagnoli.blogspot.com/" target="_blank" className='wordpressList'> <img width="20px" src={wordpressIcon}/>Victor Fugagnoli's website</a></li>
    </ul>
    </>
    },
    {
    github: 
    <>
    <h3>Github</h3>
    <p>Github is the version control software I use for managing my projects.
You can check my github on the icon below:</p>
    <a href="https://github.com/victorbaptistado" target="_blank"><img width="50px"  src={githubIcon2}/></a>
    
</>
        }
    ]);    
    return (
        <div className="sectionContainer" id={id}>
            <h1>{title}</h1>
            <section>
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
            </section>
            </div>

        )
    }


export default Tools
