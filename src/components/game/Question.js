import React from 'react';
import PropTypes from 'prop-types';
import Alternatives from './Alternatives';

class Question extends React.Component {

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    const { data } = this.props;
    const { correct_answer, incorrect_answers } = data;
    const alternatives = this.shuffleArray([correct_answer, ...incorrect_answers]);
    return (
      <div>
        <div className="header">
          <div>
            Difficulty: <h5>{data.difficulty}</h5>
          </div>
          <div>
            Category: <h5 data-testid="question-category">{data.category}</h5>
          </div>
        </div>
        <h3 data-testid="question-text">{data.question}</h3>
        <div>
          <Alternatives alternatives={alternatives} correct={correct_answer} />
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Question;
