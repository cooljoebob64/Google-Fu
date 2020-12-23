import React, { Component } from "react";

class RandomFact extends Component {
  state = {
    planetData: "none yet",
  };

  constructor() {
    super();
  }
  render() {
    return (
      <div>
        Here is a random fact:
        <p>{this.state.planetData}</p>
      </div>
    );
  }
}
export default RandomFact;

async function randomFact() {
  let response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=dCwVP4suoggG17puf85Cw7iZK4rWNKzrcbRFrAc0"
  );
  let user = await response.json();
  user.then(
    (res) => {
      return res;
    },
    (rej) => {
      console.log(`error: ${rej}`);
    }
  );
}
