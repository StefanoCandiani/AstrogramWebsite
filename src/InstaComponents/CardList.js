import React, {useState, useEffect, Fragment} from 'react';
import Card from './Card.js'
import axios from 'axios'

const CardList = () => {
    const [imagesFetched, setFetchImages] = useState([]);
    const [search, setSearch] = useState("Nebula")

  useEffect(() => {
    axios.get(`https://images-api.nasa.gov/search?q=${search}&media_type=image`)
      .then(res => {
        const imgList = [].concat(res.data.collection.items.slice(0,20)); 

        setFetchImages(imgList);
      })
  }, [search]);

  const changeItems = () => {
    let newSearch = document.querySelector(".searchBar").value;
    setSearch(newSearch);
  }

    return (
      <Fragment>
        <div className="searchArea tc ma2">
          <input type="text" className="searchBar"></input>
          <button onClick={changeItems}>Search</button>
        </div>
        <ul className="tc" style={{overflowY:"scroll", height:"600px", alignSelf:"self-end"}}>

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