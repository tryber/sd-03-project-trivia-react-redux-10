import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { questionAnswered, correctAnswer, incorrectAnswer } from '../../actions/alternativesActions';

class Alternatives extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
  }


  handleAnswer(e) {
    const answered = e.target.value;
    const { correct, questionAnswered, correctAnswer, incorrectAnswer } = this.props;
    questionAnswered(1);
    if (answered === correct) {
      correctAnswer();
    } else {
      incorrectAnswer();
    }
  }

  render() {
    const { correct, incorrects } = this.props;
    const alternatives = [correct, ...incorrects];
    return (
      <div>
        { alternatives.map((alternative) => (
          <button
            value={alternative}
            onClick={(e) => this.handleAnswer(e)}
          >
            {alternative}
          </button>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  questionAnswered: (index) => dispatch(questionAnswered(index)),
  correctAnswer: () => dispatch(correctAnswer()),
  incorrectAnswer: () => dispatch(incorrectAnswer()),
});

Alternatives.propTypes = {
  correct: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  incorrects: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Alternatives);
