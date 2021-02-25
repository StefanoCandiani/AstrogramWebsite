import React, {useState, useEffect} from 'react';
import Card from './Insta Components/Card'
import './App.css';
import axios from 'axios'

function App () {

  const [imagesFetched, setImages] = useState([])
  const [currImage, setImage] = useState([]);

  useEffect(() => {
    axios.get("https://images-api.nasa.gov/search?q=Nebula")
      .then(res => {
        const imgList = res.data.collection.items.slice(0,20);

        setImages(imgList);
      })
  }, []);

  const getImagesFromJson = (href) => {
    useEffect(() => {
      axios.get(el.href)
        .then(res => {
          const currImg = res[0];
          
          setImage(currImg);
        })
      },[])
  }

  console.log(imagesFetched);

    return (
      <>
        <h1> Testing </h1>
        <ul>
          {
            imagesFetched.map((el) => {
              return(
                <li key={el.data.map((el) => { return el.nasa_id })}>            
                  {console.log(el.href)}
                  <Card imageLink={currImage}/>
                </li>
              )
            })
          }
        </ul>

      </>
    );    

}

export default App;
