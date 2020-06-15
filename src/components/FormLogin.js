import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logInto } from '../actions/login';

class FormLogin extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      emailGravatar: '',
    };
  }

  updateLogin(field, newValue) {
    this.setState({ [field]: newValue });
  }

  validateIputs() {
    return (Object.values(this.state).some(((value) => !value)));
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

  renderButton() {
    const { log } = this.props;
    return (
      <input
        value="jogar"
        data-testid="btn-play"
        id="jogar"
        type="button"
        disabled={this.validateIputs()}
        onClick={() => log(this.state)}
      />
    );
  }

  renderButtonSettings = () => 
    (
      <input
        value="configurações"
        data-testid="btn-settings"
        id="config"
        type="button"
      />
    );

  renderForm() {
    return (
      <form>
        {this.renderLabelInput('insira o nome', 'text', 'name', 'name', 'input-player-name')}
        {this.renderLabelInput('insira o email', 'email', 'email', 'emailGravatar', 'input-gravatar-email')}
        {this.renderButton()}
        {this.renderButtonSettings()}
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  log: (login) => dispatch(logInto(login)),
});

FormLogin.propTypes = {
  log: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormLogin);
