import React, { Component } from 'react';
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

  render() {
    const { name, emailGravatar } = this.state;
    const { log } = this.props;
    return (
      <div>
        <form>
        <label className="active" htmlFor="movie_subtitle">email gravatar</label>
        <input
            placeholder="Insira o email"
            id="email"
            name="emailGravatar"
            value={emailGravatar} 
            type="text"
            onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
          />
        <label className="active" htmlFor="movie_subtitle">nome do jogador</label>
        <input
            placeholder="Insira o nome"
            id="nome"
            type="text"
            value={name}
            onChange={(event) => this.setState({ name: event.target.value })}
          />
        <input
            value="jogar"
            id="jogar"
            type="button"
            onClick={(event) => log(this.state)}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log( 'mapStateToProps', state );
  return {
}
};

const mapDispatchToProps = (dispatch) => ({
  log: (login) => dispatch(logInto(login)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
