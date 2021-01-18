import React from 'react';
import Meet4ApiService from '../../../Services/meet4ApiService';
import { ExpandedWrapper } from './Expanded.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faBeer,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';

const FriendSummaryExp = (props) => {
  const handleDel = () => {
    Meet4ApiService.deleteFriendRequest(props.friendData.id);
    props.removeFriend(props.friendData.id);
  };

  return (
    <ExpandedWrapper onClick={props.handleClick}>
      <section className="stats">
        <div>
          <FontAwesomeIcon icon={faPizzaSlice} />
          <p>{props.friendData.pizza_count}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} />{' '}
          <p>{props.friendData.coffee_count}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faBeer} />
          <p>{props.friendData.beer_count}</p>
        </div>
      </section>
      <button onClick={handleDel}>Remove Friend</button>
    </ExpandedWrapper>
  );
};

export default FriendSummaryExp;
