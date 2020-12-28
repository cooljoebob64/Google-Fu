import React, { Component } from "react";
import "./RandomFact.css";

const api_key = process.env.REACT_APP_API_KEY;

class RandomFact extends Component {
  constructor() {
    super();

    this.state = {
      planetData: {},
      isLoaded: false,
      factQuestion: "Loading question...",
      factAnswer: "Loading answer...",
      factDisplay: "none",
    };
  }

  componentDidMount() {
    this.getData();
    this.getFact();
  }

  answerReveal() {
    this.setState({ factReveal: true });
  }

  answerHide() {
    this.setState({ factReveal: false });
  }

  async getData() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
      .then((res) => {
        // console.log("Our res:");
        // console.log(res);
        return res.json();
      })
      .then((json) => {
        // console.log("Our json:");
        // console.log(json);
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

  async getFact() {
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
      .then((res) => {
        // console.log("Our res:");
        // console.log(res);
        return res.json();
      })
      .then((json) => {
        // console.log("Our json:");
        // console.log(json);
        this.setState({
          factQuestion: json.results[0].question,
          factAnswer: json.results[0].correct_answer,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          factQuestion: "Error loading!",
          isLoaded: true,
        });
      });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <p className="intro-text">Here is some data from a NASA API:</p>
          <p className="question-text">{this.state.planetData}</p>
          <p className="intro-text">This round's random trivia quesiton:</p>
          <p className="question-text">{this.state.factQuestion}</p>
          <p className="intro-text">The answer:</p>
          <p className="answer-text" visibility={this.state.factDisplay}>
            {this.state.factAnswer}
          </p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default RandomFact;
