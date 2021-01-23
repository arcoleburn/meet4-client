import React from 'react'
import Meet4ApiService from '../../../Services/meet4ApiService'

import {ItemWrapper} from '../../FriendsPage/FriendRequests/RequestItem.styles'

const LocationItem = (props) =>{

const {location_name, location_address, id} = props.data

const handleDelete = (e) =>{
  e.preventDefault()
  Meet4ApiService.deleteLocationForUser(id)
  
  props.delFromList(id)
}
//need to create functions for edit and delete, as well as edit form and submit form 
return(
  <ItemWrapper>
  <p>
    {location_name}: {location_address}
  </p>
  {/* <button>Edit</button> */}
  <button onClick={handleDelete}>Delete</button>
  </ItemWrapper>
)

}

export default LocationItem;
