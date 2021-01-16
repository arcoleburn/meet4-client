import { useState } from 'react';
import Meet4ApiService from '../../../Services/meet4ApiService';

import {FormWrapper} from '../../Utils/Form.styles'
import {RegLoginWrapper} from '../../Login/Login.styles'
const AddFriend = (props) => {
  const [sub, setsub] = useState(false);
  const [username, setUsername] = useState('');
  const [res, setRes] = useState();
  const [error, setError] = useState('');

  const onUserChange = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Meet4ApiService.addFriend(username).then((res) => {
      if (!res.ok) {
        setError(res.error);
      }
      setRes(res);
      setsub(true);
    });
  };

  const reset =(e) =>{
    e.preventDefault()
    setsub(false)
    setUsername('')
    setRes(null)
    setError('')
  }
  return (
    <RegLoginWrapper>
      {!sub && (
        <FormWrapper>
          <label htmlFor="username">Friend Username: </label>
          <input
            onChange={onUserChange}
            type="text"
            id="username"
            name="username"
          />
          <button onClick={onSubmit}>Add Friend</button>
        </FormWrapper>
      )}
      {sub && !error && <><p>{res}</p><button onClick={()=>props.history.push('/friends')}>Go Back</button></>}
      {sub && error && (
        <>
          <p>Error: {error}. Please reset and try again.</p>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </RegLoginWrapper>
  );
};


export default AddFriend;