import React from 'react';
import { Link } from 'react-router-dom';

// Change into useState maybe?
let firstName = "";
const fName = (e) => {
    firstName = e.target.value;
}

export const Login = () => {
    return (
        <div className="loginPage tc flex flex-column items-center" style={{color:"yellow"}}>
            <h1>Welcome to ASTROGRAM</h1>
            <p className="w-50 pa2 mr1">Astrogram is a website made solely for people fascinated in astronomy,
               it presents NASA images and captivates your passion for astronomy in 
               general</p>
            <h3>Please Log In with your credentials below</h3>
            <div className="inputs flex flex-column items-center">
                <input className="outline w-100 pa3 mr2" type="text" required placeholder="First Name" onChange={fName}></input><br />
                <input className="outline w-100 pa3 mr2" type="text" required placeholder="Last Name"></input><br />
                <input className="outline w-100 pa3 mr2" type="text" required placeholder="Email"></input><br />
                <input className="outline w-100 pa3 mr2" type="text" required placeholder="Favorite celestial object"></input><br />
            </div>
            <Link to="/mainpage"><button className="submitButton" type="submit">Login</button></Link>            
        </div>

    )
}

