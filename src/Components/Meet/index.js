import React, { useReducer, useState } from 'react';

const initialFormState = {
  category: 'pizza',
  location: 'Home',
  manualLoc:'',
  friend: '',
  friendLocation: '',
  manualFriendLoc:''
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const Meet = (props) => {
  const [state, dispatch] = useReducer(reducer, initialFormState);
  
  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target)
    console.log(state)
    //need to actually build out this funcitonality 
  }


  //need to generate location options based on user profile
  const userLocs = ['Home', 'Work', 'Other'];
  //need to generate location options based on friend profile
  const friendLocs = ['Home', 'Work', 'Other'];

  //need to generate list of friends based on profile
  const userFriends = ['joe', 'bob', 'frank', 'Other'];

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
      <h2>Let's Meet</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">For: </label>
        <select name="category" id="category" onChange={onChange}>
          <option value="pizza">Pizza</option>
          <option value="coffee">Coffee</option>
          <option value="beer">Beer</option>
        </select>
        <label htmlFor="location"> Where are you? </label>
        <select name="location" id="location" onChange={onChange}>
          {userLocs.map((x) => makeOption(x))}
        </select>
        {state.location == 'Other'
          ? makeOtherField('manualLoc', 'Other (enter address): ')
          : null}
        <label htmlFor="friend">Who are you meeting?</label>
        <select name="friend" id="friend" onChange={onChange}>
          {userFriends.map((x) => makeOption(x))}
        </select>
        {state.friend == 'Other'
          ? makeOtherField('manualFriendLoc', 'Where Are They? (Enter address)')
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
            {friendLocs.map((x) => makeOption(x))}
          </select>
        )}
        {state.friendLocation == 'Other'
          ? makeOtherField('manualFriendLoc', 'Other: ')
          : null}
          <button type='submit'>Go!</button>
      </form>
    </>
  );
};

export default Meet;
