import React, { Component } from "react";
import CardComponent from "./components/CardComponent";
import Grid from "@material-ui/core/Grid";
import PaginationButtons from "./components/PaginationButtons";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: "",
      previous: ""
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = e => {
    e.preventDefault();
    this.getCharacters(this.state.next);
  };

  previousPage = e => {
    e.preventDefault();
    this.getCharacters(this.state.previous);
  };

  render() {
    const { starwarsChars } = this.state;

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <PaginationButtons
          nextPage={this.nextPage}
          previousPage={this.previousPage}
          next={this.state.next}
          previous={this.state.previous}
        />
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              {!starwarsChars
                ? "NO DATA YET"
                : starwarsChars.map(starwarsChar => (
                    <CardComponent
                      key={starwarsChar.created}
                      character={starwarsChar}
                    />
                  ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
