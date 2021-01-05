import { Link } from 'react-router-dom';
import React from 'react';

const FriendSummaryExp = (props) => {
  const handleDel = () => {
    //need to make fn to handle deleting friends
  };

  return (
    <>
      <p>Pizza: {props.friendData.pizza}</p>
      <p>Coffee: {props.friendData.pizza}</p>
      <p>Beer: {props.friendData.pizza}</p>
      <button onClick ={props.handleClick}>Hide</button>
      <button>Remove Friend</button>
    </>
  );
};

export default FriendSummaryExp 