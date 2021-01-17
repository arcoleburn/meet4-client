import React, { useState } from 'react';

import TokenService from '../../Services/tokenService';
import AuthApiService from '../../Services/authApiService';
import {FormWrapper} from '../Utils/Form.styles'
const LoginForm = (props) => {
  const [error, setError] = useState(null);

  const handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    setError(null);
    const { username, password } = ev.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        if (!res.status === 200) {
          return res.json().then((error) => Promise.reject(error));
        }
        username.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        props.onLoginSuccess();
      })
      .catch((res) => {
        setError({ error: res.error });
      });
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmitJwtAuth}>
        {error && <div>{error.error}</div>}
        <label htmlFor="username"> Username: </label>
        <input required type="text" id="username" />
        <label htmlFor="password">Password: </label>
        <input required id="password" type="password" />
        <button type="submit"> Login </button>
      </FormWrapper>
    </>
  );
};

export default LoginForm