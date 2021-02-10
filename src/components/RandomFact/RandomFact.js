import React, { Component } from "react";
import "./RandomFact.css";

const api_key = process.env.REACT_APP_API_KEY; // API key storage for future development
const api_url = "https://opentdb.com/api.php?amount=1&type=multiple"; // No API key required

class RandomFact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planetData: {},
      isLoaded: false,
      factQuestion: "Loading question...",
      factAnswer: "Loading answer...",
      factDisplay: props.revealed,
    };
  }

  componentDidMount() {
    this.getFact();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.revealed !== this.props.revealed) {
      this.setReveal(this.props.revealed);
    }
  }

  setReveal(newReveal) {
    this.setState({ factDisplay: newReveal });
  }

  isLoaded() {
    console.log(`Is the fact loaded yet? Answer: ${this.state.isLoaded}`);
  }

  async getFact() {
    this.isLoaded();
    fetch(`${api_url}`)
      .then((res) => {
        console.log("Our res:");
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log("Our json:");
        console.log(json);
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
    this.isLoaded();
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <p className="intro-text">This round's random trivia question:</p>
          <p className="question-text">{this.state.factQuestion}</p>

          <p className="answer-text">
            {this.state.factDisplay
              ? this.state.factAnswer
              : "...type your answer in chat!..."}
          </p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default RandomFact;
