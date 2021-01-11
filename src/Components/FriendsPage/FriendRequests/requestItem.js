import Meet4ApiService from "../../../Services/meet4ApiService";



const RequestItem=(props)=>{

  const {username, id} = props.data;

  const handleAccept = (e) =>{
    console.log('id,', id)
    Meet4ApiService.acceptFriendRequest(id)
    props.delFromList(id).then(data=>data)
  }
  const handleDelete = (e) =>{
    Meet4ApiService.deleteFriendRequest(id)
    props.delFromList(id)
  }

  return(
    <>
    <div>
      Username: {username}
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
    </>
  )
}

export default RequestItem;
