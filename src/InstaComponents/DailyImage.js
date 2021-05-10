
////// DailyImage.js \\\\\\

import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function DailyImage() {

  const [type, setType] = useState("")
  const [currPic, setPic] = useState("");
  const [name, setName] = useState("");

    // Fetch structure from = https://sophiali.dev/javascript-fetch-api-with-nasa-api
    // API = https://api.nasa.gov/planetary/apod?api_key=QAxfbm8XXHu2UKq6ueD6mTPxuSYes5xdOCMaIsBo

  const fetchNASAData = async () => {
    try {
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=QAxfbm8XXHu2UKq6ueD6mTPxuSYes5xdOCMaIsBo')
      const data = await response.json()
      setPic(() => {
        return data.url;
      });
      setName(() => {
        return data.title;
      });
      setType(() => {
        return data.media_type;
      })
    } catch (error) {
      console.log(error)
    }
  }

  // Call to store information from API

  fetchNASAData();

  const media = () => {
    if(type === "image"){
      return <img src={currPic} alt="" height="25%" width="25%"></img>      
    } else if(type === "video"){
      return <iframe width="560" height="315" src={currPic}
             title="YouTube video player" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media;
             gyroscope; picture-in-picture" 
             allowfullscreen></iframe>
    }
  }
  

  return (
    <div className="tc">
        <h1 style={{color:"yellow"}}>NASA Picture of the Day: {name}</h1>

        <Link to='/imageOfDay'>
          {media()}
        </Link>

    </div>
  );
}

export default DailyImage;
