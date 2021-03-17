import React, {useState, useEffect, Fragment} from 'react';
import Card from './Card.js'
import axios from 'axios'

const CardList = () => {
    const [imagesFetched, setFetchImages] = useState([]);
    const [search, setSearch] = useState("Nebula")

  useEffect(() => {
    axios.get(`https://images-api.nasa.gov/search?q=${search}`)
      .then(res => {
        const imgList = [].concat(res.data.collection.items.slice(0,20)); 

        setFetchImages(imgList);
      })
  }, [search]);

  const changeItems = (e) => {
    console.log(e.target.value)
    let newSearch = e.target.value;
    setSearch(newSearch);
  }

    return (
      <Fragment>
        <div className="searchBar tc ma2">
          <input type="text" onChange={changeItems}></input>
        </div>
        <ul>

          { 
            imagesFetched.map((el) => {    
              return(
                <li key={el.data.map((el) => { return el.nasa_id })} className="fl w-25 pa2 list"> 
                {
                  el.links !== undefined ? <Card imageLink={el.links[0].href}/> : <h1>Couldn't Find a Result</h1>
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