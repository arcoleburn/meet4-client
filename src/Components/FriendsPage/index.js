import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FriendSummary from './FriendSummary'
const FriendsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const friends = [
    {
      username: 'jim',
      email: 'jim@123.com',
      date: '2020-02-01',
      coffee: 5,
      pizza: 4,
      beer: 3,
    },
    {
      username: 'bob',
      email: 'bob@123.com',
      date: '2020-03-04',
      coffee: 2,
      pizza: 8,
      beer: 4,
    },
  ];
  //need to fetch friends
  //and then

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
