import React from 'react';
import { Link } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard';
import './Ranking.css';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.dados = JSON.parse(localStorage.getItem('ranking'));
    this.dadosSorted = this.dadosSorted.bind(this);
  }
  dadosSorted() {
    return (this.dados.sort(function (a, b) { return b.score - a.score; }));
  }
  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">RANKING</h1>
        <div className="cards-div">
          {this.dados && this.dadosSorted().map((player, index) =>
            <PlayerCard key={player.name} player={player} index={index} />,
          )}
        </div>
        <Link to="/"><button data-testid="btn-go-home">Home</button></Link>
      </div>
    );
  }
}

export default Ranking;
