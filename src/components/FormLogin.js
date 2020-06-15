import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchToken } from '../actions';
import { logInto } from '../actions/login';

class FormLogin extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      emailGravatar: '',
      redirect: false,
    };
    this.playerLocalStorage = this.playerLocalStorage.bind(this);
  }

  updateLogin(field, newValue) {
    this.setState({ [field]: newValue });
  }

  validateIputs() {
    const { name, emailGravatar } = this.state;
    return (Object.values({ name, emailGravatar }).some(((value) => !value)));
  }

  renderButton() {
    return (
      <input
        value="jogar"
        data-testid="btn-play"
        id="jogar"
        type="button"
        disabled={this.validateIputs()}
        onClick={() => this.loginAndGetToken()}
      />
    );
  }

  async loginAndGetToken() {
    this.playerLocalStorage();
    const { getToken, log } = this.props;
    await getToken()
      .then(({ token }) => localStorage.setItem('token', token.token))
      .then(log(this.state));

    this.setState({ redirect: true });
  }

  playerLocalStorage() {
    const player = {
      name: this.state.name,
      assertions: 0,
      score: 0,
      gravatarEmail: this.state.emailGravatar,
    };
    localStorage.setItem('state', JSON.stringify(player));
  }

  renderLabelInput(textLabel, type, id, name, dataTestid) {
    return (
      <label htmlFor={id}>
        {textLabel}
        <input
          id={id}
          name={name}
          type={type}
          value={this.state[name]}
          data-testid={dataTestid}
          onChange={(event) => this.updateLogin(name, event.target.value)}
        />
      </label>
    );
  }

  renderForm() {
    return (
      <form>
        {this.renderLabelInput('insira o nome', 'text', 'name', 'name', 'input-player-name')}
        {this.renderLabelInput('insira o email', 'email', 'email', 'emailGravatar', 'input-gravatar-email')}
        {this.renderButton()}
        <input
          value="configurações"
          data-testid="btn-settings"
          id="config"
          type="button"
        />
      </form>
    );
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/game" />;
    }

    return (
      <div>
        {this.renderForm()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken()),
  log: (login) => dispatch(logInto(login)),
});

FormLogin.propTypes = {
  log: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormLogin);
