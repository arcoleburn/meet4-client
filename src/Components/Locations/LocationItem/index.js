import React from 'react'

const LocationItem = (props) =>{

const {name, address} = props.data

//need to create functions for edit and delete, as well as edit form and submit form 
return(
  <>
  <p>
    {name}: {address}
  </p>
  <button>Edit</button>
  <button>Delete</button>
  </>
)

}

export default LocationItem;
