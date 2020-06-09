import React from 'react';
import PropTypes from 'prop-types';
import './PlayerCard.css';

class PlayerCard extends React.Component {
  render() {
    const { player, index } = this.props;
    return (
      <div className="player-div">
        <img src={player.picture} className="image" alt={player.name}/>
        <p data-testid={`player-name-${index}`} className="name">{player.name}</p>
        <p data-testid={`player-score-${index}`} className="score">{`${player.score} pontos`}</p>
      </div>
    );
  }
}

PlayerCard.propTypes = {
  player: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default PlayerCard;
