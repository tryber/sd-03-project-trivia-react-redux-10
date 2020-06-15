import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Alternatives from './Alternatives';
import Timer from './Timer';
import { nextQuestion } from '../../actions/alternativesActions';
import { resetTimer } from '../../actions/timerActions';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.propNextQuestion(1);
    this.props.propResetTimer();
  }

  shuffleArray(arr) {
    return arr.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  render() {
    const { data, propDisable, index } = this.props;
    const alternatives = this.shuffleArray([data.correct_answer, ...data.incorrect_answers]);
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
        {propDisable && index === 4 && <button data-testid="btn-next"><Link to={'/feedback'}>Próxima</Link></button>}
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
