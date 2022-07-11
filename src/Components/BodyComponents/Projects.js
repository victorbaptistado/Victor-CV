import {React, useState} from 'react';
import onesoulIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/one-soul-icon.png";
import googleplayIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/googleplay-icon.png";
import coffeIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/coffee-icon2.png";
import risingIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/the-rising2.png";
import oneSoulAppImage from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/one-soul-app-image.PNG";

const Projects = ({id, title}) => {


    
const [texts] = useState([
    {
        about:
        <div>
            <div>
            <h3>Spotlight Focus</h3>
                <text>
                    Spotlight is an app to Reduce digital distractions. Spotlight creates space to achieve deep focus and peace of mind.
                    With it you can create a custom group of websites and apps to block, for exemple: 'No Socials', except 'LinkedIn'.
                    That's the project I'm currently envolved. Using React Native, building the app for both Android & IOS. 
                    
                </text>
            </div>
            <div style={{marginTop: 10}}>
                <text>
                    You can try the app clicking the icon below:
                </text>
            </div>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.spotlightapp"><img width="50px" src={googleplayIcon}/></a>
        </div>
    },
    {
        about:
        <div>
            <div>
            <h3>FUSE investment</h3>
                <text>
                    A platform for alternative investments, still on construction. 
                    I've been envolved with the Front-End development, using React.js.
                </text>
            </div>
        </div>
    },
    {
        about:
        <div>
            <div>
            <h3>Self-Development App</h3>
            <img className="oneSoulAppImage" src={oneSoulAppImage}/>
                <text>
                    Self-Development is a subject I find essencial - to optimize life's learning process and grow-up healthier, centered, more productive and happier. 
                    My interests dive deep, as I love to read different books about it, acquiring knowhow enought to attempt my first app on the subject.  
                    It's still on Demo version. In there I'll suggest series of challenges to make the user learn by the best way: concept & practice.
                    I'm using Html, Css & React.js.
                </text>
            </div>
            <div style={{marginTop: 10}}>
                <text>
                    You can try the app clicking the icon below:
                </text>
            </div>
            <a target="_blank" href="https://one-soul-academy.netlify.app/"><img width="50px" src={onesoulIcon}/></a>
        </div>
    },
    {
        about:
        <div>
            <h3>Coffee-Shop Website</h3>
            <text>
                I'm currently developing a website for a Brazilian coffee-shop, working as a freelancer. 
                Here I'm using Typescript.
            </text>
            <div style={{marginTop: 10}}>
                <text>
                    You can try the website clicking the icon below:
                </text>
            </div>
            <a target="_blank" href="https://borsoicafe.netlify.app/">
            <img width="50px" src={coffeIcon}/></a>
        </div>
    },
]);
    return (
  
        <div className="sectionContainer" id={id}>
            <h1>{title}</h1>
            <section>
                {texts.map(text =>
                    <div style={{marginTop: 20}}>
                        <p>{text.about}</p>
                        <hr style={{marginTop: 20}}/>
                    </div>
                    )
                }
            </section>
        </div>

    )
}

export default Projects
