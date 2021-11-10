import React from 'react';
import { useState } from 'react';





const Projects = ({id, title}) => {


    
const [texts, setText] = useState([
    {
    about: `My most recent project is a software on Self-Development.
I'm using Html, Css & Javascript React.
A series of challenges to make the user learn by the best way: concepts & practice.

It's on a beta phase. `

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
