import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alternatives from './Alternatives';
import Timer from './Timer';
import { nextQuestion } from '../../actions/alternativesActions';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.propNextQuestion(1)
  }
  render() {
    const { data, propDisable } = this.props;
    console.log(data);
    return (
      <div>
       <div className="header">
          <div>
            Difficulty: {data.difficulty}
          </div>
          <div>
            Category: {data.category}
          </div>
        </div>
        <h3>{data.question}</h3>
        <div>
          <Alternatives correct={data.correct_answer} incorrects={data.incorrect_answers} />
        </div>
        <Timer />
        {propDisable && <button data-testid="btn-next" onClick={() => this.handleClick()}>Próxima</button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  propDisable: state.alternatives.disable,
});

const mapDispatchToProps = (dispatch) => ({
  propNextQuestion: (index) => dispatch(nextQuestion(index)),
});

Question.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
