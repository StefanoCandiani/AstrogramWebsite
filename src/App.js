import React, {useState, useEffect, Fragment} from 'react';
import Card from './Insta Components/Card'
import './App.css';
import axios from 'axios'

function App () {

  const [imagesFetched, setFetchImages] = useState([]);

  useEffect(() => {
    axios.get("https://images-api.nasa.gov/search?q=Nebula")
      .then(res => {
        const imgList = [].concat(res.data.collection.items.slice(0,20)); 

        setFetchImages(imgList);
      })
  }, []);


    return (
      <Fragment>
        <ul>
          {
            imagesFetched.map((el) => {    
              return(
                <li key={el.data.map((el) => { return el.nasa_id })}>            
                  
                  <Card imageLink={el.links[0].href}/>
                </li>
              )
            })
          }
        </ul>

      </Fragment>
    );    

}

export default App;
