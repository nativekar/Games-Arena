import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Games from "./Games";
import SortDropdown from "./SortDropdown";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retrievedGames: [],
    };
  }
  componentDidMount() {
    let firstFirstGames = [];
    fetch("http://starlord.hackerearth.com/gamesext")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        firstFirstGames = data.slice(0, 54);
        this.setState({ retrievedGames: firstFirstGames });
      });
  }

  render() {
    const { retrievedGames } = this.state;
    const segmenetedGamesArray = [];
    for (let i = 0; i < retrievedGames.length; i += 3) {
      console.log(i);
      segmenetedGamesArray.push(
        <Grid.Row key={i} textAlign={"center"}>
          <Grid.Column style={{ width: "33%" }}>
            <Games gamesList={retrievedGames[i]} />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <Games gamesList={retrievedGames[i + 1]} />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <Games gamesList={retrievedGames[i + 2]} />
          </Grid.Column>
        </Grid.Row>
      );
    }
    return (
      <div>
        <Grid>
          <SortDropdown />
          {segmenetedGamesArray}
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
