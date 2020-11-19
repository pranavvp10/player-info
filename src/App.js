import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Players } from './components/Players';
import './App.css';
import {PropTypes} from 'prop-types';

/**
 * @componentName App
 * @description The main app component.
 * 
 */

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [], isLoaded: false, isClicked: false };
    this.showPlayer = this.showPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  componentDidMount() {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://footballplayerapi.herokuapp.com/getall'; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then((response) => response.json())
      .then((contents) => this.setState({ players: contents, isLoaded: true }))
      // eslint-disable-next-line no-console
      .catch(() => console.log(`Can’t access ${url} response. Blocked by browser?`));
  }

  showPlayer() {
    this.setState({
      isClicked: true,
    });
  }

  removePlayer() {
    this.setState({
      isClicked: false,
    });
  }

  render() {
    const { players, isLoaded, isClicked } = this.state;

    if (!isLoaded) {
      return <div className="loader" />;
    }
    return (
      <Container>
        <h1 className="text-center heading">Players</h1>
        <p className="text-center m-3 details">
          <i role="presentation" className="fa fa-arrow-down" onClick={this.showPlayer} onKeyDown={this.handleClick}>
            show details
          </i>
          <br />
          <i role="presentation" className="fa fa-arrow-up" onClick={this.removePlayer} onKeyDown={this.handleClick}>
            hide details
          </i>
        </p>

        {players.map((player) => (
          <CardGroup style={{ width: '350px' }} className="mx-auto m-3">
            <Card key={player.player_id} className="border-warning">
              <Card.Body className="bg-primary">
                <Card.Title className="bg-danger text-light text-center">
                  <h2>{player.name}</h2>
                </Card.Title>
                <Players
                  club={player.club}
                  age={player.age}
                  goals={player.goals}
                  apps={player.appearances}
                  assists={player.assists}
                  isClicked={isClicked}
                />
              </Card.Body>
            </Card>
          </CardGroup>
        ))}
      </Container>
    );
  }
}

App.propTypes={
  /**
   * function to show player details
   */
  showPlayer:PropTypes.func,
  /**
   * function to hide player details
   */
  hidePlayer:PropTypes.func
}

export default App;
