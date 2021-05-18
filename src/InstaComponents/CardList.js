
////// CardList.js \\\\\\

import React, {useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Card from './Card.js';
import DailyImage from './DailyImage';
import IndividualImage from './IndividualImage.js';
import ExpandedDailyImage from './ExpandedDailyImage';
import axios from 'axios';

const CardList = (props) => {
  
  // Variable storing the link of the 20 images and the initial query

    const [imagesFetched, setFetchImages] = useState([]);
    const [search, setSearch] = useState("Nebula");


  // Using axios to get an API from NASA.gov (https://api.nasa.gov/)

  useEffect(() => {
    axios.get(`https://images-api.nasa.gov/search?q=${search}&media_type=image`)
      .then(res => {
        const imgList = [].concat(res.data.collection.items.slice(0,20)); 

        setFetchImages(imgList);
        console.log(props)
      })
  }, [search, props]);

  // Change search element

  const changeItems = () => {
    let newSearch = document.querySelector(".searchBar").value;
    setSearch(newSearch);
  }

  // Constructed visual element with 20 image cards and the daily image

    return (
    <Switch>
      <Route exact path="/mainpage">
        <DailyImage />
        <div className="searchArea tc ma2">
          <input type="text" className="searchBar"></input>
          <button onClick={changeItems}>Search</button>
        </div>
        <ul className="imageList tc" style={{overflowY:"scroll", height:"600px", alignSelf:"self-end"}}>

          { 
            imagesFetched.map((el) => {    
              let indivLink = `/individualImage/${el.data[0].nasa_id}`
              return(

                <li key={el.data.map((el) => { return el.nasa_id })} className="fl w-25 pa2 list"> 
                  <Link to={indivLink}>
                    {

                    // "Filter" out the cards that are not images
                   
                      el.links !== undefined ? <Card imageLink={el.links[0].href}/> : null

                    }           
                  </Link>                  
                </li>
              )
            })              
          }
        </ul>

      </Route>
      <Route exact path="/individualImage/:_id" component={IndividualImage}/>
      <Route exact path="/imageOfDay"component={ExpandedDailyImage} />
    </Switch>
    );    

}

export default CardList;