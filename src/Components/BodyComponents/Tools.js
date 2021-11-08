import React from 'react'
import { useState } from 'react';

const Tools = ({id, title}) => {

    
    const [texts, setText] = useState([
        {
        about: ` `
    
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


export default Tools
