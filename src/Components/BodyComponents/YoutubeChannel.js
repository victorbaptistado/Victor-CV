import {React,useState} from 'react'


const YoutubeChannel = ({id, title}) => {

   
    const [texts, setText] = useState([
        {
        about:<>{`Here it adds some spice to my coding journey. 
I started my youtube channel on JS, React & other technologies. 
That's a way I found to expose my thoughts, to retrieve my learning. 
Also serves as a database (kind of a diary) to watch my progress 
- a way to remember how did I solve some issues. 
At the same time it may be helpfull to others - why not?
Have a look:`}
        <br/><br/>
   <iframe width="260" height="315" src="https://www.youtube.com/embed/WtjeUuz1VhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          
            <p >{text.about}</p>

            <br/>
            </>
            )}
            </section>
            </div>
    )

    
}

export default YoutubeChannel
