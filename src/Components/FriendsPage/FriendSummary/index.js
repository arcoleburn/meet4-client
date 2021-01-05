import React, { useState } from 'react';
import FriendSummaryExp from '../FriendSummaryExp'

const FriendSummary = (props) => {
  const [expanded, setExpand] = useState(false);

  const toggleExpand = () => setExpand(!expanded);

  const handleClick = () => toggleExpand();

  let { userName, email, date } = props.friendData;
  return (
    <>
      <div>{userName}</div>
      <div>{email}</div>
      <div>{date}</div>
      {!expanded && <button onClick={handleClick}>More</button>}
      {expanded ? (
        <FriendSummaryExp handleClick={handleClick} friendData={props.friendData} />
      ) : null}
    </>
  );
};

export default FriendSummary;

