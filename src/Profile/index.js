import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Meet4ApiService from '../Services/meet4ApiService';
const Profile = (props) => {
  //needs to be passed stats or fetch stats. probably fetch, only need it here.

  const [stats, setStats] = useState({
    pizza: 0,
    coffee: 0,
    beer: 0,
  });
  useEffect(() => {
    Meet4ApiService.getStats().then((x) =>
      setStats({
        pizza: x[0].pizza_count,
        coffee: x[0].coffee_count,
        beer: x[0].beer_count,
      })
    );
  }, []);

  return (
    <>
      <h2> Profile</h2>
      <h3> username here</h3>
      <Link to="/friends">Friends </Link>
      <Link to="/locations">Locations</Link>

      <section>
        <p>Pizza count: {stats.pizza}</p>
        <p>Coffee count: {stats.coffee} </p>
        <p>Beer count: {stats.beer}</p>
      </section>
    </>
  );
};

export default Profile;
