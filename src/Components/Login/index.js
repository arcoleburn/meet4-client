import React from 'react';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';

import LoginForm from './form';
import TokenService from '../../Services/tokenService';
import logo from '../../images/logo.png';

import {RegLoginWrapper} from './Login.styles'
import { noAuto } from '@fortawesome/fontawesome-svg-core';

const LoginPage = (props) => {
  const handleLoginSuccess = () => {
    const { location, history } = props;
    const destination = (location.state || {}).from || '/home';

    props.setUserId(jwt.decode(TokenService.getAuthToken()).userId);
    props.setUsername(jwt.decode(TokenService.getAuthToken()).username)
    history.push(destination);
  };

  return (
    <RegLoginWrapper>
    <img src={logo} style={{alignContent: 'center'}}/>
      <h2>Login</h2>
      <LoginForm
        onLoginSuccess={handleLoginSuccess}
        setUserId={props.setUserId}
      />
      <Link to="/register">No Account? Register Here!</Link>

      
    </RegLoginWrapper>
  );
};

LoginPage.defaultProps = {
  location: {},
  history: {
    push: () => {},
  },
};

export default LoginPage