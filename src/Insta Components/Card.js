import React, {useState} from 'react';

function Card( props, {imageLink} ) {
    const [likes, setLikes] = useState(0);

    function click () {
        setLikes((p) => { return p += 1 } )
    }

    return(
        <div className="card" key="0">             
            <div><img src={imageLink} alt="..."></img></div>
            <div className="button">
                <button className="like" onClick={click}><img src="https://pngimg.com/uploads/like/like_PNG15.png" alt="likeImg" height="20" width="20"></img></button>
                <p>{likes} likes</p>
            </div>
        </div>
    )
}

export default Card;