import React, { useState } from 'react';


import FriendSummaryExp from '../FriendSummaryExp';

import {FriendSummaryWrapper} from './FriendSummary.styles'

const FriendSummary = (props) => {
  const [expanded, setExpand] = useState(false);

  const toggleExpand = () => setExpand(!expanded);

  const handleClick = () => toggleExpand();

  let { username, email, date_added: date } = props.friendData;
  return (
    <FriendSummaryWrapper>
      <section onClick={handleClick}>
      <div>{username && username}</div>
      <div>{email && email}</div>
      <div>{date && date.split('T')[0]}</div>
      </section>
      
      {expanded ? (
        <FriendSummaryExp
          handleClick={handleClick}
          friendData={props.friendData}
          removeFriend={props.removeFriend}
        />
      ) : null}
    </FriendSummaryWrapper>
  );
};

export default FriendSummary;
