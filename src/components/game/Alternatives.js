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
    const { correct, propCorrectAnswer, propIncorrectAnswer } = this.props;
    if (answered === correct) {
      propCorrectAnswer();
    } else {
      propIncorrectAnswer();
    }
  }

  render() {
    const { correct, incorrects } = this.props;
    const alternatives = [correct, ...incorrects];
    return (
      <div>
        { alternatives.map((alternative) => (
          <div key={alternative}>
            <button
              value={alternative}
              onClick={(e) => this.handleAnswer(e)}
            >
              {alternative}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

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

export default connect(null, mapDispatchToProps)(Alternatives);
