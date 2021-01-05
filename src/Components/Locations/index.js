import React from 'react';
import {Link} from 'react-router-dom'
import LocationItem from './LocationItem'

const Locations = (props) =>{

  //need to fetch locations 

  const locs = [{name: 'Home', address: '123 main st'}]


  let locsList = locs.map(x=><LocationItem data={x}/>)

  return(
    <>
    <h2>My Locations</h2>
    <Link to='/addLocation'>Add A Location</Link>
    {locsList}
    </>
  )
}

export default Locations