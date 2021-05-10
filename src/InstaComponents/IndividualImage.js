
///// IndividualImage.js \\\\\\

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IndividualImage = (props) => {

    let id = props.match.params._id;
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=${id}`)
          .then(res => {
            console.log(res)
            setContent(res.data.collection);
          })
      },[id]);


    if(!content) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div className="tc">
                <h1 style={{color:"yellow"}}>{content.items[0].data[0].title}</h1>
                <img src={content.items[0].links[0].href} alt={props.match.params._id}></img>
                <p style={{color:"yellow"}}>{content.items[0].data[0].description} Date of Publication: {content.items[0].data[0].date_created} </p>
            </div>
        )        
    }


}

export default IndividualImage;