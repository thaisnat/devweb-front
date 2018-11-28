import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Answer from './answer';

const ListAnswer = props => {
  return (
    <List className="App-list">
      {props.answers.map(answer => (
        <ul className="App-list">
          <Answer
            answer={answer}
            key={answer.id}
            onAnswerClick={props.onAnswerClick}
          />
        </ul>
      ))}
    </List>
  );
}


ListAnswer.defaultProps = {
  answers: []
};

ListAnswer.propTypes = {
  onAnswerClick: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object)
};

export default ListAnswer;