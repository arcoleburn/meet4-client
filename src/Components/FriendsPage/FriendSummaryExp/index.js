import { Link } from 'react-router-dom';
import React from 'react';

const FriendSummaryExp = (props) => {
  const handleDel = () => {
    //need to make fn to handle deleting friends
  };

  return (
    <>
      <p>Pizza: {props.friendData.pizza_count}</p>
      <p>Coffee: {props.friendData.coffee_count}</p>
      <p>Beer: {props.friendData.beer_count}</p>
      <button onClick ={props.handleClick}>Hide</button>
      <button>Remove Friend</button>
    </>
  );
};

export default FriendSummaryExp 