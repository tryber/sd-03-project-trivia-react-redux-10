import React from 'react';
import Alternatives from './Alternatives';

class Question extends React.Component {
  render() {
    const { data } = this.props;
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
      </div>
    );
  }
}

Question.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Question;
