import {React} from 'react';
import YoutubeChannel from './BodyComponents/YoutubeChannel';
import ContactInfo from './BodyComponents/ContactInfo';
import Tools from "./BodyComponents/Tools";
import Projects from "./BodyComponents/Projects";
import AboutMe from "./BodyComponents/AboutMe";
import useMediaQuery from "./Hooks/useMediaQuery";

const Body = () => {

    const isMobile = useMediaQuery('(max-width: 960px)');

    return (
        <div className="bodyWrapper">  
            {isMobile ?
            "":      
            <>
            <header>
            <div className="bodyContainer1" >
                <nav>
                <ul>
                <a href="#aboutMe"><li className="buttons"><b>ABOUT ME</b></li></a>
                <a href="#tools"><li className="buttons"><b>TOOLS</b></li></a>
                <a href="#youtubeChannel"><li className="buttons"><b>YOUTUBE CHANNEL</b></li></a>
                <a href="#projects"><li className="buttons"><b>PROJECTS</b></li></a>
                </ul>
                </nav>
                <ContactInfo/>
                </div>
            </header>
            </>}

            <div className="bodyContainer2" >        
                <AboutMe id="aboutMe" title={"ABOUT"}/>         
                <Tools id="tools" title={"TOOLS"}/>
                <YoutubeChannel id="youtubeChannel" title={"YOUTUBE CHANNEL"}/>
                <Projects id="projects" title={"PROJECTS"}/>  
            </div>
        </div>      
    )
}

export default Body
