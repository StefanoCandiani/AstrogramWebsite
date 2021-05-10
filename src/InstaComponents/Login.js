
////// Login.js \\\\\\

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super()
        this.state = {
            fName: "",
            lName: "",
            eMail: "",
            fcelo: ""
        }
    }

    submit = (e) => {

        this.setState({ 
            fName: e.target[0].value,
            lName: e.target[1].value,
            eMail: e.target[2].value,
            fcelo: e.target[3].value
        })

        e.preventDefault()
        this.props.history.push('/mainpage')
    }

    render() {
        return (
            <form className="loginPage tc flex flex-column items-center" style={{color:"yellow"}} onSubmit={ this.submit }>
                <h1>Welcome to ASTROGRAM</h1>
                <p className="w-50 pa2 mr1">Astrogram is a website made for people fascinated in astronomy,
                    it presents NASA images and captivates your passion for astronomy in 
                    general</p>
                <h3>Please Log In with your credentials below</h3>
                <div className="inputs flex flex-column items-center">
                    <input className="outline w-100 pa3 mr2" type="text" required placeholder="First Name"></input><br />
                    <input className="outline w-100 pa3 mr2" type="text" required placeholder="Last Name"></input><br />
                    <input className="outline w-100 pa3 mr2" type="text" required placeholder="Email"></input><br />
                    <input className="outline w-100 pa3 mr2" type="text" required placeholder="Favorite celestial object"></input><br />
                </div>
                <button className="submitButton" type="submit">Login</button>            
            </form>
        )
    }
}

export default withRouter(Login);
