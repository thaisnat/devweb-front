import React, { Component } from 'react';
import './styles.css';
import { Row, Col } from 'reactstrap';


class Answer extends Component {

  render() {
    return (
      <div className="Answer">
        <Row>
          <Col xs="auto">
            <div className="Answer-Titulo">
            </div>
          </Col>
        </Row>
        <hr />
        <div className="Answer-Content">
          <p>Por que graças a Deus, nós fizemos o mundo.</p>
        </div>
        <hr />
      </div>
    );
  }
}

export default Answer;