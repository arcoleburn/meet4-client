import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Meet4ApiService from '../../Services/meet4ApiService';
import LocationItem from './LocationItem';

const Locations = (props) => {
  const [locations, setLocs] = useState([]);
  //need to fetch locations

  useEffect(() => {
    Meet4ApiService.getUserLocations().then((locs) => setLocs(locs));
  },[]);

  const delFromList=(id)=>{
    let newLocs = [...locations]
    setLocs(newLocs.filter(loc=>loc.id !== id))
  }

  let locsList = locations.map((x) => <LocationItem data={x} history={props.history} delFromList={delFromList}/>);

  return (
    <>
      <h2>My Locations</h2>
      <Link to="/addLocation">Add A Location</Link>
      {locsList}
    </>
  );
};

export default Locations;
