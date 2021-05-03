import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IndividualImage = (props) => {

    let id = props.match.params._id;
    console.log(id);
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=${id}`)
          .then(res => {
              console.log(res)
            setContent(res.data.collection);
          })
      },[id]);

    return (
        <div>
            <h1>{content.items[0].data[0].title}</h1>
        </div>
    )
}

export default IndividualImage;