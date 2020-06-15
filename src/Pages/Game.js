import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTriviaApi, fetchToken } from '../actions';
import QuestionLibrary from '../components/game/QuestionLibrary';
import PlayerHeader from '../components/PlayerHeader';

class Game extends React.Component {

  async componentDidMount() {
    const { getTrivia } = this.props;
    await getTrivia(localStorage.getItem('token'));
  }

  render() {
    const player = {
      name: 'Leticia',
      assertions: 0,
      score: 0,
      gravatarEmail: 'leticia.duarte.lima@gmail.com',
    };
    localStorage.setItem('state', JSON.stringify(player));
    const { data, loading } = this.props;
    if (loading) return <p> Loading... </p>;
    return (
      <div>
        <h2> Game page </h2>
        <PlayerHeader />
        <QuestionLibrary data={data} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken()),
  getTrivia: (token) => dispatch(fetchTriviaApi(token)),
});

const mapStateToProps = (state) => ({
  data: state.triviaApi.data,
  loading: state.triviaApi.loading,
});

Game.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  getToken: PropTypes.func.isRequired,
  getTrivia: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
