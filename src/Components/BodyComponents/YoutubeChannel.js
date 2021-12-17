import {React,useState} from 'react'


const YoutubeChannel = ({id, title}) => {

   
    const [texts, setText] = useState([
        {
        about:<>{`I started my youtube channel on JS, React & other technologies. 
That's a way I found to expose my thoughts, to solidify my knowledge, and a database (kind of a diary) 
to watch my progress - a way to remember how did I solve some issues. At the same time it may be
helpfull for others:`}
        <br/><br/>
        <iframe width="100%" height="315" 
    src="https://www.youtube.com/watch?v=IBVFA6JOIPw">
    </iframe>
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
