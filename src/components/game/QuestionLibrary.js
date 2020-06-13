import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from './Question';
import { questionAnswered } from '../../actions/alternativesActions';

class QuestionLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    const { propQuestionAnswered } = this.props;
    propQuestionAnswered(1);
  }

  render() {
    const { data, index } = this.props;
    return (
      <div>
        <h2>QuestionLibrary component</h2>
        <h4>Question number {index + 1} </h4>
        <Question data={data[index]} />
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  index: state.alternatives.index,
});

const mapDispatchToProps = (dispatch) => ({
  propQuestionAnswered: (index) => dispatch(questionAnswered(index)),
});

QuestionLibrary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number,
  propQuestionAnswered: PropTypes.func.isRequired,
};

QuestionLibrary.defaultProps = {
  index: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionLibrary);
