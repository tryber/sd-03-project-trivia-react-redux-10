import React from 'react';
import { connect } from 'react-redux';
import { fetchTriviaApi, fetchToken } from '../actions'

class Questions extends React.Component {

  componentDidMount() {
    const { getTrivia, getToken } = this.props;
    getToken().then((data) => getTrivia(data.token))
  }

  render() {
    return (
      <p>Questions Page</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
