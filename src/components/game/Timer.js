import React from 'react';

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      timer: 30,
    }
    this.startTimer = this.startTimer.bind(this)
  }
  componentDidMount() {
    this.startTimer();
  }
  startTimer() {
    this.timer = setInterval(() => this.setState({
      timer: this.state.timer - 1,
    }), 1000);
  }
  render() {
    return(
        <p>Tempo: {this.state.timer}</p>
    )
  }
}

export default Timer;
