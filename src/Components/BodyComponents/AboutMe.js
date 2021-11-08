import React from 'react'
import { useState } from 'react';

const AboutMe = ({id, title}) => {

     
    
const [texts, setText] = useState([
    {
    about: `I'm `

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
