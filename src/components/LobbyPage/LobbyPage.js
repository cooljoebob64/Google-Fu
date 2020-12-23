import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

class LobbyPage extends Component {
  render() {
    return <div><Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Result</th>
        <th>Win/Loss</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Player 1</td>
        <td>Win</td>
        <td>1/2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Player 2</td>
        <td>Lose</td>
        <td>2/2</td>
      </tr>
    </tbody>
  </Table></div>;
  }
}
export default LobbyPage;
