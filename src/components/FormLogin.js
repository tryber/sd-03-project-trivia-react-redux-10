import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInto } from '../actions/login';
import PropTypes from 'prop-types';

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
        onClick={() => log(this.state)}
      />
    );
  }

  renderForm() {
    return (
      <form>
        {this.renderLabelInput('insira o nome', 'text', 'name', 'name', 'input-player-name')}
        {this.renderLabelInput('insira o email', 'email', 'email', 'emailGravatar', 'input-gravatar-email')}
        {this.renderButton()}
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
