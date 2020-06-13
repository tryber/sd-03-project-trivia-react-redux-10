import React from 'react';
import PropTypes from 'prop-types';
import Alternatives from './Alternatives';

class Question extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
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
          <Alternatives correct={data.correct_answer} incorrects={data.incorrect_answers} />
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Question;
