import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startTimer, changeTimer } from '../../actions/timerActions';
import { incorrectAnswer } from '../../actions/alternativesActions';

class Timer extends React.Component {
  componentDidMount() {
    const timerID = setInterval(() => this.props.propchangeTimer(), 1000);
    this.props.propstartTimer(timerID)
  }

  componentDidUpdate() {
    if (this.props.time === 0) {
      clearInterval(this.props.id);
      this.props.propIncorrectAnswer();
    }
  }

  render() {
    const { time } = this.props;
    return(
        <p>Tempo: {time}</p>
    )
  }
}

const mapStateToProps = (state) => ({
  time: state.timer.time,
  id: state.timer.id,
}); 

const mapDispatchToProps = (dispatch) => ({
  propstartTimer: (id) => dispatch(startTimer(id)),
  propchangeTimer: () => dispatch(changeTimer()),
  propIncorrectAnswer: () => dispatch(incorrectAnswer()),
});

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  id: PropTypes.number,
  propstartTimer: PropTypes.func.isRequired,
  propchangeTimer: PropTypes.func.isRequired,
  propIncorrectAnswer: PropTypes.func.isRequired,
};

Timer.defaultProps = {
  id: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
