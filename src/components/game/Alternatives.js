import React from 'react';

class Alternatives extends React.Component {
  constructor(props){
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
  }


  handleAnswer(e) {
    const answered = e.target.value;
    const { correct } = this.props;
    if(answered === correct){
      alert('Alternativa correta!');
    }
    else {
      alert('Alternativa errada!');
    }
  }

  render() {
    const { correct, incorrects } = this.props;
    const alternatives = [correct, ...incorrects]
    console.log(correct);
    console.log(incorrects);
    console.log(alternatives);
    return (
      <div>
        { alternatives.map((alternative) => <button value={alternative} onClick={(e) => this.handleAnswer(e)} >{alternative}</button>) }
      </div>
    );
  }
}

export default Alternatives;
