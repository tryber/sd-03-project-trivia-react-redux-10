import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from './Question';

class QuestionLibrary extends React.Component {
  render() {
    const { data, index } = this.props;
    if (index === 5) return <h2> Jogo terminado, parabéns! </h2>;
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

QuestionLibrary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number,
};

QuestionLibrary.defaultProps = {
  index: 0,
};

export default connect(mapStateToProps)(QuestionLibrary);
