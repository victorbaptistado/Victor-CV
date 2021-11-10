import React from 'react';
import { useState } from 'react';





const Projects = ({id, title}) => {


    
const [texts, setText] = useState([
    {
    about:<>{`One thing I'm very interested about is Personal Development; in other words: becoming the best you can become.  
Therefore, my most recent project is a software on Self-Development.

In there I suggest series of challenges to make the user learn by the best way: concept & practice.

I'm using Html, Css & Javascript React. It's on a beta phase. 
You can find the git repository for it here: `}<a target="_blank" href="https://github.com/victorbaptistado/One-Soul-App-React"><span >one soul academy</span></a></>
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
