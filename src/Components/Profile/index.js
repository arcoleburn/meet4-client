import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Meet4ApiService from '../../Services/meet4ApiService';

import { ProfileWrapper } from './Profile.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBeer, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const Profile = (props) => {
  //needs to be passed stats or fetch stats. probably fetch, only need it here.

  const [stats, setStats] = useState({
    pizza: 0,
    coffee: 0,
    beer: 0,
  });
  useEffect(() => {
    Meet4ApiService.getStats().then((x) =>
      x.length ?     
      setStats({
        pizza: x[0].pizza_count,
        coffee: x[0].coffee_count,
        beer: x[0].beer_count,
      }) : null
    );
  }, []);

  return (
    <ProfileWrapper>
      <h3> Welcome back, {props.username}!</h3>
      <div className="links">
        <Link to="/friends">Friends </Link>
        <Link to="/locations">Locations</Link>
      </div>
      <section className='stats'>
        <div>
          <FontAwesomeIcon icon={faPizzaSlice} />
          <p>{stats.pizza}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} /> 
          <p>{stats.coffee}</p>
        </div>
        <div>
          <FontAwesomeIcon icon = {faBeer} />
          <p>{stats.beer}</p>
        </div>
      </section>
    </ProfileWrapper>
  );
};

export default Profile;
