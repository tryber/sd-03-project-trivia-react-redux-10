import React from 'react';
import FormLogin from '../components/FormLogin';
import LogoGravatar from '../components/LogoUser';

class Login extends React.Component {
  render() {
    return (
      <div>
      <LogoGravatar />
      <FormLogin />
      </div>
    );
  }
}

export default Login;
