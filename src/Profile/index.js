import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  //needs to be passed stats or fetch stats. probably fetch, only need it here.
  

  return (
    <>
      <h2> Profile</h2>
      <h3> username here</h3>
      <Link to="/friends">Friends </Link>
      <Link to="/locations">Locations</Link>

      <section>
        <p>Pizza count: 0</p>
        <p>Coffee count: 0 </p>
        <p>Beer count: 0</p>
      </section>
    </>
  );
};

export default Profile