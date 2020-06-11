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

updateLogin(field, newValue) {
  this.setState({ [field]: newValue });
}
  
renderLabelInput(textLabel, id, name) {
 return (
    <label>
      {textLabel}
      <input
        id={id}
        name={name}
        type="text"
        value={this.state[name]}
        onChange={(event) => this.updateLogin(name, event.target.value)}
      />
    </label>
  ); 
}

renderButton() {
  const { log } = this.props;
   return( <input
      value="jogar"
      id="jogar"
      type="button"
      onClick={(event) => log(this.state)}
    />
  );
 }
  render() {
    return (
      <div>
        <form>
          {this.renderLabelInput('insira o nome', 'name', 'name')}
          {this.renderLabelInput('insira o email', 'email', 'emailGravatar')}
          {this.renderButton()}
        </form>
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  log: (login) => dispatch(logInto(login)),
})

export default connect(null, mapDispatchToProps)(FormLogin);
