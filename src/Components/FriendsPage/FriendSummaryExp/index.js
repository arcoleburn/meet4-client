import { Link } from 'react-router-dom';
import React from 'react';
import Meet4ApiService from '../../../Services/meet4ApiService';

const FriendSummaryExp = (props) => {
  const handleDel = () => {
    Meet4ApiService.deleteFriendRequest(props.friendData.id)
    props.removeFriend(props.friendData.id)
  };

  return (
    <>
      <p>Pizza: {props.friendData.pizza_count}</p>
      <p>Coffee: {props.friendData.coffee_count}</p>
      <p>Beer: {props.friendData.beer_count}</p>
      <button onClick ={props.handleClick}>Hide</button>
      <button onClick={handleDel}>Remove Friend</button>
    </>
  );
};

export default FriendSummaryExp 