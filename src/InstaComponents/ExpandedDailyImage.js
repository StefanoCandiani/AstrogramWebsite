
////// ExpandedDailyImage.js \\\\\\

import React, { useState } from 'react';

function ExpandedDailyImage() {

        // Dyanmic variables using useState from React

    const [type, setType] = useState("")
    const [currPic, setPic] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
  
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
        });
        setDescription(() => {
            return data.explanation;
        });
        setDate(() => {
            return data.date;
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

      // Image with description and explanation
    
      return (
        <div className="tc">
            <h1 style={{color:"yellow"}}>{name}</h1>
    
              {media()}

            <p style={{color:"yellow"}}>{description} Date of Publication: {date}</p>
        </div>
      );
}

export default ExpandedDailyImage;