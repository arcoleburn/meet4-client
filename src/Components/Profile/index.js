import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Meet4ApiService from '../../Services/meet4ApiService';
import { Loader } from '@googlemaps/js-api-loader';

import { PolyUtil } from 'node-geometry-library';

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

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_KEY,
      libraries: 'geometry',
    });
    console.log(
      PolyUtil.decode(
        'qmkwF|}gbMgBT]PCm@Eo@SmDQ}CEe@B?g@BaRda@kBxDS`@g@~@g@|@S^mNlZyMvY]dAsNhl@Ub@yEnGYr@ok@rqC[pAc@zAYhAERIRaNpp@yDrPCZ@p@FVJRNRRRxI`HPN`@Z`ExCqHhJsAgA_hAw|@a@Qa@MsVcD}IiAgAQqKgBg@Ig@GqE_@`CYj@kA'
      )
    );
    // loader
    //   .load()
    //   .then(() => {
    //     const ptsArr = PolyUtil.decode(
    //       'qmkwF|}gbMgBT]PCm@Eo@SmDQ}CEe@B?g@BaRda@kBxDS`@g@~@g@|@S^mNlZyMvY]dAsNhl@Ub@yEnGYr@ok@rqC[pAc@zAYhAERIRaNpp@yDrPCZ@p@FVJRNRRRxI`HPN`@Z`ExCqHhJsAgA_hAw|@a@Qa@MsVcD}IiAgAQqKgBg@Ig@GqE_@`CYj@kA'
    //     );
    //     console.log('pts arr', ptsArr);
    //   })
    //   .catch((err) => console.log(err));
  });

  return (
    <>
      <h2> Profile</h2>
      <h3> Hey, {props.username}!</h3>
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
