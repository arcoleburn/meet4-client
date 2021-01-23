import Meet4ApiService from '../../../Services/meet4ApiService';

import { ItemWrapper } from './RequestItem.styles';

const RequestItem = (props) => {
  const { username, id } = props.data;

  const handleAccept = (e) => {
    Meet4ApiService.acceptFriendRequest(id);
    props.delFromList(id);
  };
  const handleDelete = (e) => {
    Meet4ApiService.deleteFriendRequest(id);
    props.delFromList(id);
  };

  return (
    <ItemWrapper>
      Username: {username}
      <div className="controls">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </ItemWrapper>
  );
};

export default RequestItem;
