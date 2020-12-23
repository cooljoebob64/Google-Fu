import React, { Component } from "react";

class RandomFact extends Component {
  state = {
    planetData: "",
  };

  constructor(props) {
    super(props);

    this.state.planetData = rand();
  }

  render() {
    return (
      <div>
        Here is a random fact:
        {async function randomFact() {
          let response = await fetch(
            "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&where=*api_key=dCwVP4suoggG17puf85Cw7iZK4rWNKzrcbRFrAc0"
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

          return randomFact();
        }}
      </div>
    );
  }
}
export default RandomFact;
