import React, {useState} from 'react';

function Card(props) {
    const [likes, setLikes] = useState(0);

    function click () {
        setLikes((p) => { return p += 1 } )
    }

    const cardStyle = {
        width:"200px",
        height:"200px",
        objectFit:"cover"
      }

    return(
        <div>
            <div className="card h-100 w-100" key="0">             
                <div><img src={props.imageLink} alt="..." style={cardStyle}></img></div>
                
            </div>
            <div className="button">
                    <button className="like" onClick={click}><img src="https://pngimg.com/uploads/like/like_PNG15.png" alt="likeImg" height="20" width="20"></img></button>
                    <p>{likes} likes</p>
            </div>
        </div>
    )
}

export default Card;