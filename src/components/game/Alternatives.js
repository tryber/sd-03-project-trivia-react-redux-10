import React from 'react';

class Alternatives extends React.Component {
  render() {
    const { correct, incorrects } = this.props;
    const alternatives = incorrects.push(correct);
    console.log(correct);
    console.log(incorrects);
    console.log(alternatives);
    return (
      <div>
        { alternatives.map((alternative) => <button>{alternative}</button>) }
      </div>
    );
  }
}

export default Alternatives;
