import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cryptEmail from '../services/cryptoGravatarAPI';
import './PlayerHeader.css';

class PlayerHeader extends React.Component {
  render() {
    const { score } = this.props;
    const { player } = JSON.parse(localStorage.getItem('state'));
    return (
      <div className="player-header">
        <img
          data-testid="header-profile-picture"
          src={cryptEmail(player.gravatarEmail)}
          alt="Player"
          className="player-image"
        />
        <p>Jogador: </p>
        <p data-testid="header-player-name" className="player-name">{player.name}</p>
        <p>Pontos: </p>
        <p data-testid="header-score" className="player-score">{score}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.alternatives.score,
});

PlayerHeader.propTypes = {
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(PlayerHeader);
