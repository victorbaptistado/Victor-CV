import {React, useState} from 'react';
import onesoulIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/one-soul-icon.png";
import coffeIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/coffee-icon2.png";
import risingIcon from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/the-rising2.png";
import oneSoulAppImage from "/Users/Victor/Documents/PROGRAMMING/CV/victor-cv/src/Image/one-soul-app-image.PNG";


const Projects = ({id, title}) => {


    
const [texts, setText] = useState([
    {
    about:<>
<h3>Self-Development App</h3>

<img className="oneSoulAppImage" src={oneSoulAppImage}/>
{`Self-Development is a subject I find essencial - to optimize life's learning process and grow-up healthier, centered, more productive and happier. 
My interests dive deep, as I love to read different books about it, acquiring knowhow enought to attempt my first app on the subject.  

It's still on Demo version. In there I'll suggest series of challenges to make the user learn by the best way: concept & practice.

I'm using Html, Css & React.js.
You can try the app clicking the icon below: `}
    <br/>
    
<a target="_blank" href="https://one-soul-academy.netlify.app/">
<img width="50px" src={onesoulIcon}/></a></>
},

{
    about:<>
    <h3>Hospitality Website</h3>
    {`I was working as a freelancer, helping to maintain The Rishing's website, a recruitment company that finds workers for hospitality jobs.
This website has been upgraded many times throughout the years.

You can try the app clicking the icon below: `}
        <br/>
    <a target="_blank" href="https://therishing.co.uk/about-us/">
    <img width="50px" src={risingIcon}/></a>
        </>
    },

{
about:<>
<h3>Coffee-Shop Website</h3>
{`I'm currently developing a website for a Brazilian coffee-shop, working as a freelancer. 
Here I'm using Typescript.

You can try the website clicking the icon below: `}
    <br/>
<a target="_blank" href="https://borsoicafe.netlify.app/">
<img width="50px" src={coffeIcon}/></a>
    </>
},

]);



    return (
  
        <div className="sectionContainer" id={id}>
            <h1>{title}</h1>
            <section>
            <br/><br/>

            {texts.map(text =>
            <>
          
            <p>{text.about}</p>
            <br/>
            <hr/>
            <br/>

            </>
            )

            }
            </section>
        </div>

    )
}

export default Projects
