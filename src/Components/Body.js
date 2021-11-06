import React from 'react'
import Tools from "./BodyComponents/Tools"
import Projects from "./BodyComponents/Projects"
import AboutMe from "./BodyComponents/AboutMe"



const Body = () => {
    return (
        <div className="bodyWrapper">
            <div className="bodyContainer1">
            <ul>
            <a href="#tools"><li>TOOLS</li></a>
            <a href="#projects"><li>PROJECTS</li></a>
            <a href="#aboutMe"><li>ABOUT ME</li></a>
            </ul>
            </div>
           
      
            <div className="bodyContainer2">
                <Tools id="tools" title={"Tools"}/>
                <Projects id="projects" title={"Projects"}/>           
                <AboutMe id="aboutMe" title={"About Me"}/>

            </div>




        </div>
    )
}

export default Body
