import React from 'react';
import { useState } from 'react';
import onesoulIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/one-soul-icon.png";




const Projects = ({id, title}) => {


    
const [texts, setText] = useState([
    {
    about:<>{`One thing I'm very interested about is Personal Development; in other words: becoming the best you can become.  
Therefore, my most recent project is a software on Self-Development.

In there I suggest series of challenges to make the user learn by the best way: concept & practice.

I'm using Html, Css & Javascript React. It's on a beta phase. 
You can find the git repository on the icon below: `}
<br/>
<a target="_blank" href="https://github.com/victorbaptistado/One-Soul-App-React"><img width="50px" src={onesoulIcon}/></a></>
},
{
    two: `test`
},


]);



    return (
        <div id={id}>
            <h1>{title}</h1>
            <br/><br/>

            {texts.map(text =>
            <div>
            <p>{text.about}</p>
            <br/>
            </div>
            )}
             </div>
        
    )
}

export default Projects
