import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Meet4ApiService from '../../Services/meet4ApiService';
import jwt from 'jsonwebtoken';
import TokenService from '../../Services/tokenService';
import FriendSummary from './FriendSummary';

import {FriendPageWrapper} from './FriendsPage.styles'
import Spinner from '../Utils/Spinner';

const FriendsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState(['no friends yet']);

  const username = jwt.decode(TokenService.getAuthToken()).username;

  useEffect(() => {
    setLoading(true)
    Meet4ApiService.getFriends().then((friends) =>
      setFriends(friends)
    );
    setLoading(false)
  }, []);

  const removeFriendFromList =(id) => {
    let newFriends = [...friends]
    console.log('rem friend list ran')
    setFriends(newFriends.filter(x=>x.id !== id))
  }

  let friendsDisplay = friends
    .filter((x) => x.username !== username)
    .map((friend) => {
      return <FriendSummary removeFriend={removeFriendFromList} friendData={friend} key={friend.id} setFriends={setFriends}/>;
    });

 

  return (
    <FriendPageWrapper>
      <h3>Friends</h3>
      <div className="links">
      <Link to="/addFriend">Add Friend </Link>
      <Link to="/requests">Friend Requests</Link>
      </div>
      {loading
        ? <Spinner/>
        : !friends
        ? <p>No friends found. Click "add friend" to add more!</p>
        : friendsDisplay}
    </FriendPageWrapper>
  );
};

export default FriendsPage;
