import React, {useState} from 'react'
import Meet4ApiService from '../../../Services/meet4ApiService'

import {RegLoginWrapper} from '../../Login/Login.styles'
import {FormWrapper} from '../../Utils/Form.styles'
const AddLoc = (props)=>{
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')


  const handleSubmit=(e) => {
    e.preventDefault()
    let loc = {name, address}
    Meet4ApiService.addLocationForUser(loc).then(res=>console.log(res))
    props.history.push('/locations')
  }
  return (
    <RegLoginWrapper>
      <h3>Add Location</h3>
    <FormWrapper onSubmit ={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type='text' name='name' id='name' onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="address">Address:</label>
      <input type='text' name='address' id='address' onChange={(e)=>setAddress(e.target.value)}/>
    <button type='submit'>Submit</button>
    </FormWrapper>
    
    </RegLoginWrapper >

  )
}

export default AddLoc;

