import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'

class HomePage extends Component {
  render() {
    return (
    <Jumbotron fluid>
    <div>
      <h1>Welcome to GOOGLE-FU!</h1>
      <p>
        TEST YOUR TRIVA KNOWLEDGE AGAINST YOUR FRIENDS!
      </p>
    </div>
  </Jumbotron>
    );

  }
}
export default HomePage;
