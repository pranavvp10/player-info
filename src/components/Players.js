import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import {PropTypes} from 'prop-types';

/**
 * @param {Object} props - Player properties
 * @param {string} props.club - Player's club
 * @param {number} props.age - Player's age
 * @param {number} props.apps - Player's appearances
 * @param {number} props.goals - Players's Goals
 * @param {number} props.assists - Player's assists
 */

export class Players extends Component {
  render() {
    if (this.props.isClicked) {
      return (
        <Card.Text>
          <ListGroup>
            <ListGroup.Item>
              <h5>{this.props.club}</h5>
            </ListGroup.Item>
            <ListGroup.Item>{this.props.age}</ListGroup.Item>
            <Table stripped bordered hover size="sm" variant="dark">
              <thead>
                <tr className="text-center">
                  <th>Apps</th>
                  <th>Goals</th>
                  <th>Assists</th>
                </tr>
              </thead>
              <thead>
                <tr className="text-center">
                  <td>{this.props.apps}</td>
                  <td>{this.props.goals}</td>
                  <td>{this.props.assists}</td>
                </tr>
              </thead>
            </Table>
          </ListGroup>
        </Card.Text>
      );
    }
    return null;
  }
}

Players.propTypes={
  /** Player details like club,age etc. */
    players:PropTypes.element.isRequired

}

export default Players;
