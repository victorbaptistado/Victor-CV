import {React, useState} from 'react';
import onesoulIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/one-soul-icon.png";
import oneSoulAppImage from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/one-soul-app-image.PNG";


const Projects = ({id, title}) => {


    
const [texts, setText] = useState([
    {
    about:<>{`Self-Development is a subject I find essencial - to optimize life's learning process and grow-up healthier, centered, more productive and happier. 
My interests dive deep, as I love to read different books about it, acquiring knowhow enought to attempt my first app on the subject.  

It's still on Demo version. In there I'll suggest series of challenges to make the user learn by the best way: concept & practice.

I'm using Html, Css & React.js.
You can try the app clicking the icon below: `}
    <br/>
<a target="_blank" href="https://one-soul-academy.netlify.app/">
<img width="50px" src={onesoulIcon}/></a></>
},





]);



    return (
  
        <div className="sectionContainer" id={id}>
            <h1>{title}</h1>
            <section>
            <br/><br/>

            {texts.map(text =>
            <>
            <img className="oneSoulAppImage" src={oneSoulAppImage}/>
            <p >{text.about}</p>

            <br/>

            </>
            )

            }
            </section>
        </div>

    )
}

export default Projects
