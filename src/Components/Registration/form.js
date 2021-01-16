import { useState, useReducer } from 'react';
import AuthApiService from '../../Services/authApiService'; //need to build
import {FormWrapper} from '../Utils/Form.styles'
const initialFormState = {
  regUsername: '',
  regPassword: '',
  confirmPass: '',
  email: '',
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const RegistrationForm = (props) => {
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const { regUsername, regPassword, confirmPass, email } = state;

    if (regPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (regPassword !== confirmPass) {
      setError('Passwords must match');
      return;
    }
    const newUser = {
      username: regUsername,
      password: regPassword,
      email,
    };
    AuthApiService.postUser(newUser)
      .then((res) => props.onRegSuccess())
      .catch((res) => setError({ error: res.error }));
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>{error && <p>{error.error}</p>}</div>
      <label htmlFor="regUsername"> Username: </label>
      <input
        id="regUsername"
        name="regUsername"
        required
        type="text"
        onChange={onChange}
      ></input>
      <label htmlFor="regPassword" name="regPassword">
        Password:
      </label>
      <input
        id="regPassword"
        name="regPassword"
        type="password"
        required
        onChange={onChange}
      />
      <label htmlFor="confirmPass">Confirm Password:</label>
      <input
        id="confirmPass"
        name="confirmPass"
        type="password"
        required
        onChange={onChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={onChange}
      />

      <button type="submit"> Register </button>
    </FormWrapper>
  );
};

export default RegistrationForm;
