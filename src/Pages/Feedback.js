import React from 'react';
import { Link } from 'react-router-dom';
import PlayerHeader from '../components/PlayerHeader';

class Feedback extends React.Component {
  render() {
    const player = JSON.parse(localStorage.getItem('state'));
    const feedbackText = player.assertions < 3 ? 'Podia ser melhor...' : 'Mandou bem!';
    return (
      <div>
        <h1> Feedback Page </h1>
        <PlayerHeader />
        <div>
          <p data-testid="feedback-text">{feedbackText}</p>
        </div>
        <h3>Placar final: <p data-testid="feedback-total-score">{player.score}</p></h3>
        <h3>Acertos: <p data-testid="feedback-total-question">{player.assertions}</p></h3>
        <Link to="/">
          <button data-testid="btn-play-again">Jogar novamente</button>
        </Link>
        <Link to="/ranking">
          <button data-testid="btn-ranking">Ver ranking</button>
        </Link>
      </div>
    );
  }
}

export default Feedback;
