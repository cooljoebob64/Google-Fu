import React, { Component } from "react";

const api_key = process.env.REACT_APP_API_KEY;

class RandomFact extends Component {
  constructor() {
    super();

    this.state = {
      planetData: {},
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          planetData: json.title,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          planetData: "Error loading!",
          isLoaded: true,
        });
      });
  }
  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          Here is a random fact:
          <p>{this.state.planetData}</p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

async function randomFact() {
  let response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=dCwVP4suoggG17puf85Cw7iZK4rWNKzrcbRFrAc0"
  );
  let webData = await response.json();
  if (webData) {
    return webData;
  } else return console.error("No data!");
}

export default RandomFact;
