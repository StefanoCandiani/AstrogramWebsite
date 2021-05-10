
////// Card.js \\\\\\

import React from 'react';

function Card(props) {

    const cardStyle = {
        width:"150px",
        height:"150px",
        objectFit:"cover"
      }

    return(
            <div className="card h-100 w-100" key="0">             
                <div><img src={props.imageLink} alt="..." style={cardStyle}></img></div>
            </div>
    )
}

export default Card;