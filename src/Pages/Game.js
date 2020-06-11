import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTriviaApi, fetchToken } from '../actions';
import QuestionLibrary from '../components/game/QuestionLibrary';
import PlayerHeader from '../components/PlayerHeader';

class Questions extends React.Component {

  componentDidMount() {
    const { getToken, getTrivia } = this.props;
    getToken()
      .then(({ token }) => localStorage.setItem('token', token.token))
      .then(getTrivia(localStorage.getItem('token')));
  }

  render() {
    const { data, loading } = this.props;
    if (loading) return <p> Loading... </p>;
    return (
      <div>
        <h2> Questions page </h2>
        <PlayerHeader />
        <QuestionLibrary data={data}/>
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

Questions.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  getToken: PropTypes.func.isRequired,
  getTrivia: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
