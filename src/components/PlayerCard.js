import React from 'react';
import './PlayerCard.css';

class PlayerCard extends React.Component {
  render() {
    const { player, index } = this.props;
    return (
      <div className="player-div">
        <img src={player.picture} className="image" />
        <p data-testid={`player-name-${index}`} className="name">{player.name}</p>
        <p data-testid={`player-score-${index}`} className="score">{`${player.score} pontos`}</p>
      </div>
    )
  }
}

export default PlayerCard;
