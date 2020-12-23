import React, { Component } from "react";

class randomFact extends Component {
  render() {
    return (
      <div>
        {async function randomFact() {
          let response = await fetch(
            "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&where=*api_key=dCwVP4suoggG17puf85Cw7iZK4rWNKzrcbRFrAc0"
          );
          let user = await response.json();
        }}
      </div>
    );
  }
}
export default randomFact;
