import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Meet4ApiService from '../../Services/meet4ApiService';
import FriendSummary from './FriendSummary';
const FriendsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    Meet4ApiService.getFriends().then((friends) =>
      setFriends(friends)
    );
  }, []);

  useEffect(()=>{
    for(let friend in friends){
      Meet4ApiService.getFriendDetails(friend.initiator_id).then(x=>console.log(x))
    }
  },[friends])
  let friendsDisplay = friends.map((friend) => {
    return <FriendSummary friendData={friend} />;
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
