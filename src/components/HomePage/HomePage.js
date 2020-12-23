import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Typical from 'react-typical';
class HomePage extends Component {
  render() {
    return (
    <Jumbotron fluid>
    <div>
      <h1>Welcome to GOOGLE-FU!</h1>
      <p>
        TEST YOUR TRIVA KNOWLEDGE AGAINST YOUR FRIENDS!
      </p>
      <p><Button href="#">START GAME</Button> </p>
    
    <p>
      Thanks for {' '}

      <Typical
        loop={Infinity}
        wrapper="b"
        steps={ [
          'joining!!',
          1000,
          'playing!!',
          1000,
          'visiting!!',
          1000,
          'coming!!',
          1000 
        ]}
        />
    </p>
    </div>
    </Jumbotron>
    )
  }
}
export default HomePage;
