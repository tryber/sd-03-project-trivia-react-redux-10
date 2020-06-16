import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetAlternativesReducer } from '../actions/alternativesActions';
import FormLogin from '../components/FormLogin';
import LogoGravatar from '../components/LogoUser';

class Login extends React.Component {
  componentDidMount() {
    const { propResetReducer} = this.props;
    propResetReducer();
    if (localStorage.getItem('state')) {
      localStorage.removeItem('state');
    }
  }
  render() {
    return (
      <header>
        <LogoGravatar />
        <FormLogin />
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  propResetReducer: () => dispatch(resetAlternativesReducer()),
});

Login.propTypes = {
  propResetReducer: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
