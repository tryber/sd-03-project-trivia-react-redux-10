import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { correctAnswer, incorrectAnswer } from '../../actions/alternativesActions';

class Alternatives extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(e) {
    const answered = e.target.value;
    const { correct, propCorrectAnswer, propIncorrectAnswer } = this.props;
    if (answered === correct) {
      propCorrectAnswer();
    } else {
      propIncorrectAnswer();
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    const { correct, incorrects, notAnswered } = this.props;
    const alternatives = [correct, ...incorrects];
    return (
      <div>
        { alternatives
          .map((alternative, index) => (alternative === correct) ? (
          <div key={alternative}>
            <button
              data-testid='correct-answer'
              className={notAnswered ? '' : 'correct'}
              value={alternative}
              disabled={!notAnswered}
              onClick={(e) => this.handleAnswer(e)}
            >
              {alternative}
            </button>
          </div>
        ) : (
          <div key={alternative}>
            <button
              data-testid={`wrong-answer-${index}`}
              className={notAnswered ? '' : 'wrong'}
              value={alternative}
              disabled={!notAnswered}
              onClick={(e) => this.handleAnswer(e)}
            >
              {alternative}
            </button>
          </div>
        )
        ) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notAnswered: state.alternatives.notAnswered,
});

const mapDispatchToProps = (dispatch) => ({
  propCorrectAnswer: () => dispatch(correctAnswer()),
  propIncorrectAnswer: () => dispatch(incorrectAnswer()),
});

Alternatives.propTypes = {
  correct: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  incorrects: PropTypes.arrayOf(PropTypes.any).isRequired,
  propCorrectAnswer: PropTypes.func.isRequired,
  propIncorrectAnswer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alternatives);
