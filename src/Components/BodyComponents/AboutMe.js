import React from 'react'
import { useState } from 'react';

const AboutMe = ({id, title}) => {

     
    
const [texts, setText] = useState([
    {
    about: `I'm a Web Developer student.

I'm looking foward to collaborate on a project and to be part of a exciting team that can help me develop my skills.`

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

    


export default AboutMe
