import {React,useState} from 'react'


const YoutubeChannel = ({id, title}) => {

   
    const [texts, setText] = useState([
        {
        about:<>{`I started my youtube channel on JS, React & other technologies. 
That's a way I found to expose my thoughts, to solidify my knowledge, and a database (kind of a diary) 
to watch my progress - a way to remember how did I solve some issues. At the same time it may be
helpfull to others:`}
        <br/><br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IBVFA6JOIPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
    },
    
    
    
    
    
    ]);
    
    

    return (
         
        <div className="sessionContainer" id={id}>
            <h1>{title}</h1>
            <br/><br/>

            {texts.map(text =>
            <>
          
            <p >{text.about}</p>

            <br/>
            </>
            )}
             </div>
        
    )

    
}

export default YoutubeChannel
