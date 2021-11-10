import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye,faUmbrellaBeach, faPlay } from '@fortawesome/free-solid-svg-icons';

const AboutMe = ({id, title}) => {

     
    
const [texts, setText] = useState([
    {
    about: `Welcome to my personal website! 
I'm a Web Developer student.`
    },
    {
    currently: <><FontAwesomeIcon icon={faPlay} style={{color: "green"}}/>
    {` I'm currently developing my own application on Self-Development.`}
    </>},
    {
    objective: <><FontAwesomeIcon icon={faBullseye} style={{color: "red"}}/>
    {` I'm looking foward to collaborate on a project and to be part of an exciting, challenging team that can help me to develop my skills.`}
    </>},
    {
    hobbies: <><FontAwesomeIcon icon={faUmbrellaBeach} style={{color:"deepskyblue"}}/>
    {` A list of some of my hobbies: Reading, Writing, Singing, Guitar, Acting, Directing, Meditation, Yoga... `}
    </>
    }



]);



    return (
        <div id={id}>
            <h1>{title}</h1>
            <br/><br/>

            {texts.map(text =>
            <div>
            <p>{text.currently}</p>
    
            <p>{text.about}</p>
            <p>{text.objective}</p>
            <p>{text.hobbies}</p>
            <br/><br/><br/>
  
            </div>
            )}
             </div>
        
    )
}

    


export default AboutMe
