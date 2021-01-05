import React from 'react';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';

import LoginForm from './form';
import TokenService from '../../Services/tokenService';

const LoginPage = (props) => {
  const handleLoginSuccess = () => {
    const { location, history } = props;
    const destination = (location.state || {}).from || '/home';

    props.setUserId(jwt.decode(TokenService.getAuthToken()).userId);

    history.push(destination);
  };

  return (
    <>
      <h2>Login</h2>
      <LoginForm
        onLoginSuccess={handleLoginSuccess}
        setUserId={props.setUserId}
      />
      <Link to="/register">No Account? Register Here!</Link>
    </>
  );
};

LoginPage.defaultProps = {
  location: {},
  history: {
    push: () => {},
  },
};

export default LoginPage