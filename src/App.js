import React, {useState, useEffect, Fragment} from 'react';
import Card from './Insta Components/Card'
import './App.css';
import axios from 'axios'

function App () {

  const [imagesFetched, setFetchImages] = useState([])
  const [currImage, setImage] = useState([]);

  useEffect(() => {
    axios.get("https://images-api.nasa.gov/search?q=Nebula")
      .then(res => {
        const imgList = [].concat(res.data.collection.items.slice(0,20)); 

        setFetchImages(imgList);
      })
  }, []);

  console.log(imagesFetched);

    return (
      <Fragment>
        <h1> Testing </h1>
        <ul>
          {
            imagesFetched.map((el) => { 
                axios.get(el.href)
                  .then(res => {
                  setImage(res.data[0])
                })                
              return(
                <li key={el.data.map((el) => { return el.nasa_id })}>            
                  
                  <Card imageLink={currImage}/>
                </li>
              )
            })
          }
        </ul>

      </Fragment>
    );    

}

export default App;
