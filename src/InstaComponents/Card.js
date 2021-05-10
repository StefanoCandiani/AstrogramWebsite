
////// Card.js \\\\\\

import React, {useState} from 'react';

function Card(props) {
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100000) );

    function click () {
        setLikes((p) => { return p += 1 } )
    }

    const cardStyle = {
        width:"150px",
        height:"150px",
        objectFit:"cover"
      }

    return(
        <div className="bg-black pa4 h-70 w-100">
            <div className="card h-100 w-100" key="0">             
                <div><img src={props.imageLink} alt="..." style={cardStyle}></img></div>
                
            </div>
            <div className="button">
                    <button className="like" onClick={click}><img src="https://pngimg.com/uploads/like/like_PNG15.png" alt="likeImg" height="20" width="20"></img></button>
                    <p style={{color:"white"}}>{likes} likes</p>
            </div>
        </div>
    )
}

export default Card;