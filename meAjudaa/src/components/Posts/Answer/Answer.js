import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import User from '../../User/User';
import PropTypes from "prop-types";
import './answer.css';

class Answer extends Component {
  render() {
    const { answer } = this.props;
    return (
      <div className="Answer">
        <Row>
          <Col xs="auto">
            <div
              className="UserSmall"><User />
            </div>
            <div className="Answer-Titulo">
            </div>
          </Col>
          <Col xs="10" style={{ marginLeft: -15 + "px", marginTop: 10 + "px" }}>
          </Col>
          <div className="Answer-Content">
            {answer.text}
          </div>
        </Row>
      </div>
    );
  }
}

Answer.PropTypes = {
  onAnswerClick: PropTypes.func.isRequired,
  answer: PropTypes.object.isRequired
};

export default Answer;