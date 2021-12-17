import {React} from 'react';
import ContactInfo from './BodyComponents/ContactInfo';
import Tools from "./BodyComponents/Tools";
import Projects from "./BodyComponents/Projects";
import AboutMe from "./BodyComponents/AboutMe";


const Body = () => {


    return (
        <div className="bodyWrapper"> 
        
            {/* ---- CONTAINER 1 ---- */}

            <div className="bodyContainer1" >
     
                <nav>
                <ul>
                <a href="#aboutMe"><li className="buttons"><b>ABOUT ME (TEST)</b></li></a>
                <a href="#tools"><li className="buttons"><b>TOOLS</b></li></a>
                <a href="#projects"><li className="buttons"><b>PROJECTS</b></li></a>
                </ul>
                </nav>

                <ContactInfo/>

            </div>

            {/* ---- CONTAINER 2 ---- */}

            <div className="bodyContainer2" >
                
                <AboutMe id="aboutMe" title={"ABOUT"}/>         
                <Tools id="tools" title={"TOOLS"}/>
                <Projects id="projects" title={"PROJECTS"}/>  

            </div>


        </div>      
    )
}

export default Body
