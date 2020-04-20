import React from "react";
import { Card } from "semantic-ui-react";

const Games = ({ gamesList }) => (
  <Card centered>
    <Card.Content centered>
      <Card.Header>{gamesList.title}</Card.Header>
      <Card.Meta>
        <span className="date">{gamesList.release_year}</span>
      </Card.Meta>
      <Card.Description>{gamesList.genre}</Card.Description>
      <Card.Description>{gamesList.score}</Card.Description>
      <Card.Description>{gamesList.editors_choice}</Card.Description>
    </Card.Content>
    <Card.Content extra centered>
      <a href={gamesList.url}>URL</a>
    </Card.Content>
  </Card>
);

export default Games;
