import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Alternatives from './Alternatives';
import Timer from './Timer';
import { nextQuestion } from '../../actions/alternativesActions';
import { resetTimer } from '../../actions/timerActions';
import cryptEmail from '../../services/cryptoGravatarAPI';

class Question extends React.Component {
  static shuffleArray(arr) {
    return arr.map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.state = {
      shuffledAlternatives: [],
    };
  }

  componentDidMount() {
    this.handleNextQuestion();
  }

  handleNextQuestion() {
    const { data } = this.props;
    const alternatives = Question.shuffleArray([data.correct_answer, ...data.incorrect_answers]);
    this.setState({ shuffledAlternatives: alternatives });
  }

  handleClick() {
    this.props.propNextQuestion(1);
    this.props.propResetTimer();
  }

  handleFeedback() {
    const { player } = JSON.parse(localStorage.getItem('state'));
    const photoURL = cryptEmail(player.gravatarEmail);
    const playerInRanking = {name: player.name, score: player.score, picture: photoURL};
    if (localStorage.getItem('ranking')) {
      const oldRanking = JSON.parse(localStorage.getItem('ranking'));
      const newRanking = [...oldRanking, playerInRanking];
      localStorage.setItem('ranking', JSON.stringify(newRanking));
    } else {
      const newRanking = [playerInRanking];
      localStorage.setItem('ranking', JSON.stringify(newRanking));
      }
    }

  render() {
    const { data, propDisable, index } = this.props;
    // const alternatives = Question.shuffleArray([data.correct_answer, ...data.incorrect_answers]);
    const alternatives = [data.correct_answer, ...data.incorrect_answers];
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
          <Alternatives
            alternatives={alternatives}
            correct={data.correct_answer}
            difficulty={data.difficulty}
          />
        </div>
        <Timer />
        {
          propDisable
          && index !== 4
          && <button data-testid="btn-next" onClick={() => this.handleClick()}>Próxima</button>
        }
        {propDisable && index === 4 && <button data-testid="btn-next" onClick={() => this.handleFeedback()}><Link to={'/feedback'}>Próxima</Link></button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  propDisable: state.alternatives.disable,
  index: state.alternatives.index,
});

const mapDispatchToProps = (dispatch) => ({
  propNextQuestion: (index) => dispatch(nextQuestion(index)),
  propResetTimer: () => dispatch(resetTimer()),
});

Question.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  propNextQuestion: PropTypes.func.isRequired,
  propResetTimer: PropTypes.func.isRequired,
  propDisable: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
