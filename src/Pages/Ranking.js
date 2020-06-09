import React from 'react';
import { Link } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard';
import './Ranking.css';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.dados = [
      { name: 'Leticia', score: 120, picture: 'https://http://gravatar.com/avatar/c1b09141cf006729b52488cb6c4d5035' },
      { name: 'Bruno', score: 49, picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
      { name: 'Mônica', score: 100, picture: 'https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3' },
    ];
    this.dadosSorted = this.dadosSorted.bind(this);
  }
  dadosSorted() {
    return (this.dados.sort(function (a, b) { return b.score - a.score }));
  }
  render() {
    return (
      <div>
        <h1>RANKING</h1>
        <div className="cards-div">
          {this.dadosSorted().map((player, index) => <PlayerCard key={player.name} player={player} index={index} />)}
        </div>
        <Link to="/"><button data-testid="btn-go-home">Home</button></Link>
      </div>
    );
  }
}

export default Ranking;
