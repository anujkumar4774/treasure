import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import startimg from "../../img/startimg.jpg";
function GameCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{width:"inherit"}} variant="top" src={startimg} />
      <Card.Body className="container">
      <Link to="/challenge1" className="btn waves-effect waves-light hoverable blue accent-3">Start</Link>
      </Card.Body>
    </Card>
  );
}

export default GameCard;