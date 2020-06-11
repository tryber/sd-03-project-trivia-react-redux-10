import React from 'react';
import cryptEmail from '../services/gravatarApiDeletar';
import './PlayerHeader.css';

class PlayerHeader extends React.Component {
  render() {
    return (
      <div className="player-header">
        <img 
          data-testid="header-profile-picture" 
          src={cryptEmail("leticia.duarte.lima@gmail.com")} 
          alt="Player"
          className="player-image"
        />
        <p data-testid="header-player-name" className="player-name">Jogador: Leticia</p>
        <p data-testid="header-score" className="player-score">Pontos: 0</p>
      </div>      
    )
  }
}

export default PlayerHeader;
