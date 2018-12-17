import React, { Component } from 'react';
import NewAnswer from '../Answer/NewAnswer';
import ListAnswer from '../Answer/ListAnswer';

class AfterPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [

      ]
    }
  }

  toggleAnswer = toggledAnswer => {
    this.setState(prevState => {
      const { answers } = prevState;

      const newAnswers = answers.map(answer => {
        if (toggledAnswer.id === answer.id) {
          return {
            ...answer,
            done: !answer.done
          };
        } else {
          return answer;
        }
      });
      return { answers: newAnswers };
    });
  }

  newAnswerr = text => {
    this.setState(prevState => {
      const { answers } = prevState;
      const newAnswer = {
        text,
        done: false,
        id: answers.lenght
      };

      return {
        answers: answers.concat([newAnswer])
      };
    });
  };


  render() {
    const { answers } = this.state;
    return (
      <div className="App-timeline">
        <NewAnswer onSubmit={this.newAnswerr} />
        <ListAnswer
          answers={answers}
          onAnswerClick={this.toggleAnswer}
          newAnswerr={this.newAnswerr}
        />
      </div>
    );
  }
}

export default AfterPost;