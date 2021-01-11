import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Meet4ApiService from '../../Services/meet4ApiService';
import jwt from 'jsonwebtoken';
import TokenService from '../../Services/tokenService';
import FriendSummary from './FriendSummary';
const FriendsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState(['no friends yet']);

  const username = jwt.decode(TokenService.getAuthToken()).username;

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>console.log('waited'),5000)
    Meet4ApiService.getFriends().then((friends) =>
      setFriends(friends)
    );
    setLoading(false)
  }, []);
  let friendsDisplay = friends
    .filter((x) => x.username != username)
    .map((friend) => {
      return <FriendSummary friendData={friend} key={friend.id} />;
    });

  return (
    <>
      <h2>Friends</h2>
      <Link to="/addFriend">Add Friend </Link>
      <Link to="/requests">Friend Requests</Link>
      {loading
        ? 'Loading Friends...'
        : !friends
        ? 'No friends found. Click "add friend" to add more!'
        : friendsDisplay}
    </>
  );
};

export default FriendsPage;
