import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye,faUmbrellaBeach, faPlay } from '@fortawesome/free-solid-svg-icons';

const AboutMe = ({id, title}) => {

     
    
const [texts, setText] = useState([
    {
    about: `Welcome to my personal website! 
I'm a Web Developer hermit who loves to burn my neurones writing code & solving problems. 
I appreciate both conditions of the coding journey: solitude & team work.

My proficient computer languages: React.js / Javascript.
I'm aspiring to have my first apprenticeship in the field.`
    },
    {
    currently: <><FontAwesomeIcon className="aboutIcon" icon={faPlay} style={{color: "green"}}/>
I'm currently developing my own application on Self-Development and my youtube channel on WebDev coding.
    </>},
    {
    objective: <><FontAwesomeIcon className="aboutIcon" icon={faBullseye} style={{color: "red"}}/>
I'm aspiring an apprenticeship opportunity. My goal is to build a carreer in a friendly and exciting company.
    </>},
    {
    hobbies: <><FontAwesomeIcon className="aboutIcon" icon={faUmbrellaBeach} style={{color:"deepskyblue"}}/>
A list of some of my hobbies: Reading, Writing, Singing, Guitar, Acting, Directing, Meditation, Yoga...
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
            <p>{text.currently}</p>
            <p>{text.about}</p>
            <p>{text.objective}</p>
            <p>{text.hobbies}</p>
            <br/><br/><br/>
      
            </div>
            )}
                  <br/>
               <hr/>
            </section>
        </div>

        
    )
}

    


export default AboutMe
