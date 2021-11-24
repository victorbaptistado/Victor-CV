import React from 'react';
import { useState } from 'react';
import onesoulIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/one-soul-icon.png";
import oneSoulAppImage from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/one-soul-app-image.PNG";


const Projects = ({id, title}) => {


    
const [texts, setText] = useState([
    {
    about:<>{`One thing I'm very interested about is Personal Development. 
In other words: becoming the best you can become.  
Therefore, my most recent project is a software on Self-Development.

In there I suggest series of challenges to make the user learn by the best way: concept & practice.

I'm using Html, Css & Javascript React. It's on a beta phase. 
You can try the app clicking the icon below: `}
    <br/>
<a target="_blank" href="https://one-soul-academy.netlify.app/">
<img width="50px" src={onesoulIcon}/></a></>
},





]);



    return (
        <div id={id}>
            <h1>{title}</h1>
            <br/><br/>

            {texts.map(text =>
            <>
            <img className="oneSoulAppImage" src={oneSoulAppImage}/>
            <p >{text.about}</p>

            <br/>
            </>
            )}
             </div>
        
    )
}

export default Projects
