import React, { useEffect, useReducer, useState } from 'react';
import jwt from 'jsonwebtoken';
import Meet4ApiService from '../../Services/meet4ApiService';
import TokenService from '../../Services/tokenService';
import Results from './Results';

import { FormWrapper } from '../Utils/Form.styles';
import { MeetWrapper } from './Meet.styles';

const initialFormState = {
  category: 'pizza',
  location: 'Other',
  manualLoc: '',
  friend: 'Other',
  friendLocation: '',
  manualFriendLoc: '',
};

function reducer(state, { field, value }) {
  console.log('reducer ran');
  return {
    ...state,
    [field]: value,
  };
}

const Meet = (props) => {
  const [sub, setSub] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const [excludeChains, setChains] = useState(false)
  const [userLocs, setUserLocs] = useState([]);
  const [userFriends, setUserFriends] = useState([]);
  const [friendLocs, setFriendLocs] = useState([]);
  

  const username = jwt.decode(TokenService.getAuthToken()).username;
  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onFriendChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
    if (e.target.value !== 'Other') {
      Meet4ApiService.getFriendLocs(e.target.value).then((data) =>
        setFriendLocs(
          [{ location_name: 'Other', id: 'other' }].concat([...data])
        )
      );
      dispatch({ field: 'friendLocation', value: 'Other' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSub(true);
  };

  useEffect(() => {
    Meet4ApiService.getFriends().then((friends) =>
      setUserFriends(
        [{ id: 'other', username: 'Other' }].concat(
          friends.filter((x) => x.username !== username)
        )
      )
    );
    Meet4ApiService.getUserLocations().then((locs) =>
      setUserLocs(
        [{ location_name: 'Other', id: 'other' }].concat([...locs])
      )
    );
  }, [username]);
  //need to generate location options based on friend profile
  // const friendLocs = ['Home', 'Work', 'Other'];

  //need to generate list of friends based on profile
  // const userFriends = ['joe', 'bob', 'frank', 'Other'];

  useEffect(() => {});

  const makeOption = (item) => {
    return <option value={item}> {item} </option>;
  };

  const makeOtherField = (x, y) => {
    return (
      <>
        <label htmlFor={x}>{y}</label>
        <input
          type="text"
          name={x}
          id={x}
          onChange={onChange}
        ></input>
      </>
    );
  };

  return (
    <>
      {!sub && (
        <MeetWrapper>
          {' '}
          <h2>Let's Meet</h2>
          <FormWrapper onSubmit={handleSubmit}>
            <label htmlFor="category">For: </label>
            <select name="category" id="category" onChange={onChange}>
              <option value="pizza">Pizza</option>
              <option value="coffee">Coffee</option>
              <option value="beer">Beer</option>
            </select>
            <label htmlFor="location"> Where are you? </label>
            <select name="location" id="location" onChange={onChange}>
              {userLocs.map((x) => makeOption(x.location_name))}
            </select>
            {state.location === 'Other'
              ? makeOtherField('manualLoc', 'Other (enter address): ')
              : null}
            <label htmlFor="friend">Who are you meeting?</label>
            <select
              name="friend"
              id="friend"
              onChange={onFriendChange}
            >
              {userFriends.map((x) => makeOption(x.username))}
            </select>
            {state.friend === 'Other'
              ? makeOtherField(
                  'manualFriendLoc',
                  'Where Are They? (Enter address)'
                )
              : null}
            {state.friend !== 'Other' && (
              <label htmlFor="friendLocation">Where are they?</label>
            )}
            {state.friend !== 'Other' && (
              <select
                name="friendLocation"
                id="friendLocation"
                onChange={onChange}
              >
                {friendLocs.map((x) => makeOption(x.location_name))}
              </select>
            )}
            {state.friendLocation === 'Other'
              ? makeOtherField(
                  'manualFriendLoc',
                  'Other (enter address): '
                )
              : null}
            <div id='chainsbox'>
                {/* need to make a click here change state */}
              <input type="checkbox"  id="chains" onClick={()=>{
                console.log('box clicked')
                setChains(!excludeChains)}
              }/>
              <label htmlFor="chains">Exclude Chains?</label>
            </div>
            <button type="submit">Go!</button>
          </FormWrapper>{' '}
        </MeetWrapper>
      )}
      {sub && (
        <Results
        excludeChains={excludeChains}
          history={props.history}
          category={state.category}
          addressA={
            state.location === 'Other'
              ? state.manualLoc
              : userLocs.filter(
                  (x) => x.location_name === state.location
                )[0].location_address
          }
          addressB={
            state.friend === 'Other' ||
            state.friendLocation === 'Other'
              ? state.manualFriendLoc
              : friendLocs.filter(
                  (x) => x.location_name === state.friendLocation
                )[0].location_address
          }
          data={state}
          friendId={
            state.friend === 'Other'
              ? null
              : userFriends.filter(
                  (x) => x.username === state.friend
                )[0].id
          }
        />
      )}
    </>
  );
};

export default Meet;
