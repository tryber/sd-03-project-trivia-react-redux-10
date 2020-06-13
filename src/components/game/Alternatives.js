import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { correctAnswer, incorrectAnswer, questionAnswered } from '../../actions/alternativesActions';

class Alternatives extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.newScore = this.newScore.bind(this);
  }

  newScore() {
    const { difficulty, time } = this.props;
    const player = JSON.parse(localStorage.getItem('state'));
    let newScore = 0;
    if (difficulty === 'hard') newScore = 10 + (time * 3);
    if (difficulty === 'medium') newScore = 10 + (time * 2);
    if (difficulty === 'easy') newScore = 10 + time;
    const updatePlayer = {
      name: player.name,
      assertions: player.assertions + 1,
      score: player.score + newScore,
      gravatarEmail: 'leticia.duarte.lima@gmail.com',
    };
    localStorage.setItem('state', JSON.stringify(updatePlayer));
    return newScore;
  }

  handleAnswer(e) {
    const answered = e.target.value;
    const { correct, propCorrectAnswer, propIncorrectAnswer, id } = this.props;
    if (answered === correct) {
      const score = this.newScore();
      propCorrectAnswer(score);
      clearInterval(id);
    } else {
      propIncorrectAnswer();
      clearInterval(id);
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
        {alternatives
          .map((alternative, index) => (alternative === correct) ? (
            <div key={alternative}>
              <button
                data-testid="correct-answer"
                className={notAnswered ? '' : 'correct'}
                value={alternative}
                disabled={!notAnswered}
                onClick={(e) => this.handleAnswer(e)}
              >{alternative}</button>
            </div>
          ) : (
              <div key={alternative}>
                <button
                  data-testid={`wrong-answer-${index}`}
                  className={notAnswered ? '' : 'wrong'}
                  value={alternative}
                  disabled={!notAnswered}
                  onClick={(e) => this.handleAnswer(e)}
                >{alternative}</button>
              </div>
            )
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.timer.time,
  id: state.timer.id,
  notAnswered: state.alternatives.notAnswered,
});

const mapDispatchToProps = (dispatch) => ({
  propQuestionAnswered: () => dispatch(questionAnswered()),
  propCorrectAnswer: (score) => dispatch(correctAnswer(score)),
  propIncorrectAnswer: () => dispatch(incorrectAnswer()),
});

Alternatives.propTypes = {
  correct: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  incorrects: PropTypes.arrayOf(PropTypes.any).isRequired,
  difficulty: PropTypes.string.isRequired,
  propCorrectAnswer: PropTypes.func.isRequired,
  propIncorrectAnswer: PropTypes.func.isRequired,
  id: PropTypes.number,
  time: PropTypes.number.isRequired,
  notAnswered: PropTypes.bool.isRequired,
};

Alternatives.defaultProps = {
  id: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alternatives);
