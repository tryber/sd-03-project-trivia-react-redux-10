import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

class QuestionLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    const { index } = this.state;
    const { data } = this.props;
    return (
      <div>
        <h2>QuestionLibrary component</h2>
        <h4>Question number {index + 1} </h4>
        <Question data={data[index]} />
      </div>
    );
  }

}

QuestionLibrary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuestionLibrary;
