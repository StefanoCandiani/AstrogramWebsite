import React, {useState, useEffect, Fragment} from 'react';
import Card from './Card.js'
import axios from 'axios'

const CardList = () => {

  // Variable storing the link of the 20 images and the initial query

    const [imagesFetched, setFetchImages] = useState([]);
    const [search, setSearch] = useState("Nebula");


  // Using axios to get an API from NASA.gov (https://api.nasa.gov/)

  useEffect(() => {
    axios.get(`https://images-api.nasa.gov/search?q=${search}&media_type=image`)
      .then(res => {
        const imgList = [].concat(res.data.collection.items.slice(0,20)); 

        setFetchImages(imgList);
      })
  }, [search]);

  // Change search element

  const changeItems = () => {
    let newSearch = document.querySelector(".searchBar").value;
    setSearch(newSearch);
  }

  // Constructed visual element with 20 image cards and the daily image

    return (
      <Fragment>
        <div className="searchArea tc ma2">
          <input type="text" className="searchBar"></input>
          <button onClick={changeItems}>Search</button>
        </div>
        <ul className="imageList tc" style={{overflowY:"scroll", height:"600px", alignSelf:"self-end"}}>

          { 
            imagesFetched.map((el) => {    
              return(
                <li key={el.data.map((el) => { return el.nasa_id })} className="fl w-25 pa2 list"> 
                {
                  el.links !== undefined ? <Card imageLink={el.links[0].href}/> : null
                }           
                  
                </li>
              )
            })              

          }
        </ul>

      </Fragment>
    );    

}

export default CardList;