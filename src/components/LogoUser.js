import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

LogoGravatar.propTypes = {
  urlGravatar: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(LogoGravatar);
