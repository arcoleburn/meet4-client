import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Meet4ApiService from '../../../Services/meet4ApiService';
import RequestItem from './requestItem';

import {RequestsWrapper} from './Requests.styles'

const FriendRequests = (props) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    Meet4ApiService.getFriendRequests().then((requests) =>
      setRequests(requests)
    );
  }, []);

  const delFromList = (id) => {
    let newReqs = [...requests];
    setRequests(newReqs.filter((x) => x.id !== id));
  };

  let reqList = requests.map((x) => (
    <RequestItem
      data={x}
      history={props.history}
      delFromList={delFromList}
    />
  ));

  return (
    <RequestsWrapper>
      <h2> Pending Friend Requests</h2>
      <Link to="/friends"> Back to Friends </Link>
      {!reqList.length? <p>You have no pending requests.</p>:  reqList}
    </RequestsWrapper>
  );
};

export default FriendRequests;
