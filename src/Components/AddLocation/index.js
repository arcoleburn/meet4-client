import React, {useState} from 'react'

const AddLoc = (props)=>{
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')


  const handleSubmit=(e) => {
    e.preventDefault()
    //need code to make POST name and address 
    console.log(name, address)
  }
  return (
    <>
    <form onSubmit ={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type='text' name='name' id='name' onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="address">Address:</label>
      <input type='text' name='address' id='address' onChange={(e)=>setAddress(e.target.value)}/>
    <button type='submit'>Submit</button>
    </form>
    
    </>

  )
}

export default AddLoc;

