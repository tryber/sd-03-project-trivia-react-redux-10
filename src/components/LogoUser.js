import React from 'react';
import { connect } from 'react-redux';

const LogoGravatar = ({ urlGravatar }) => {
  console.log(urlGravatar);
  return (
    <div>
      <img src={urlGravatar} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('mapStateToPropslogoGravatar', state);
  return {
    urlGravatar: state.loginReducer.urlGravatar,
  };
};

export default connect(mapStateToProps)(LogoGravatar);
