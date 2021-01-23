import React, { useState, useEffect } from 'react';
import Meet4ApiService from '../../../Services/meet4ApiService';
import Spinner from '../../Utils/Spinner';
import { DirectionsWrapper, Wrapper } from './Directions.styles';
import { Step } from './Steps';

const Map = (props) => {
  const [loading, setLoading] = useState(true);
  const [userDirections, setUserDir] = useState(null);
  const [friendDirections, setFriendDir] = useState(null);
  const [statsLogged, setStats] = useState(false);
  const [favorite, setFav] = useState(false);
  let userAddress = props.addressA;
  let friendAddress = props.addressB;
  let destination = props.business.location.display_address.join(' ');

  useEffect(() => {
    setLoading(true);
    Meet4ApiService.getDirections(userAddress, destination)
      .then((res) => setUserDir(res))
      .then(
        Meet4ApiService.getDirections(
          friendAddress,
          destination
        ).then((res) => {
          setFriendDir(res);
          setLoading(false);
        })
      );
  }, [destination, friendAddress, userAddress]);

  const logMeeting = () => {
    
    let user2 = props.data.friend;
    let loc1 = props.data.location;
    let loc2 = props.data.friendLocation;
    if (
      props.data.friend === 'Other' ||
      props.data.friendLocation === 'Other'
    ) {
      loc2 = props.data.manualFriendLoc;
    }
    if (props.data.location === 'Other') {
      loc1 = props.data.manualLoc;
    }
    if (props.data.friend === 'Other') {
      user2 = null;
    }
    Meet4ApiService.addHistory(
      user2,
      loc1,
      loc2,
      props.business.name,
      props.business.location.display_address.join(' '),
      props.data.category.charAt(0).toUpperCase() +
        props.data.category.slice(1)
    ).then(() =>
      Meet4ApiService.updateUserStats(
        props.data.category
      ).then((res) =>
        user2 == null
          ? setStats(true)
          : Meet4ApiService.updateFriendStats(
              props.friendId,
              props.data.category
            ).then((res) => setStats(true))
      )
    );

  };

  const addFavorite = () => {
    setFav(true);
  };

  const renderDirections = (directions) => {
    let majorSteps = directions.routes[0].legs[0].steps;
    let arr = [];
    for (let i = 0; i < majorSteps.length; i++) {
      let substeps;

      majorSteps[i].steps
        ? (substeps = majorSteps[i].steps)
        : (substeps = []);

      majorSteps[i].travel_mode === 'TRANSIT'
        ? arr.push(
            <Step
              line={majorSteps[i].transit_details.line.short_name}
              mainStep={true}
              stepData={majorSteps[i]}
              type={'transit'}
            />
          )
        : arr.push(
            <Step
              type={'walk'}
              mainStep={true}
              stepData={majorSteps[i]}
            />
          );
      if (majorSteps[i].steps) {
        for (let j = 0; j < majorSteps[i].steps.length; j++) {
          majorSteps[i].steps[j].travel_mode === 'TRANSIT'
            ? arr.push(
                <Step
                  type={'transit'}
                  mainStep={false}
                  stepData={majorSteps[i].steps[j]}
                />
              )
            : arr.push(
                <Step
                  type={'walk'}
                  mainStep={false}
                  stepData={majorSteps[i].steps[j]}
                />
              );
        }
      }
    }
    return (
      <>
        <p className="duration">
          {directions.routes[0].legs[0].duration.text} ||{' '}
          {directions.routes[0].legs[0].distance.text}
        </p>
        <DirectionsWrapper>{arr}</DirectionsWrapper>
      </>
    );
  };

  return (
    <>
      {!userDirections || !friendDirections || loading ? (
        <Spinner />
      ) : (
        <Wrapper>
          <h4>Directions for User to {props.business.name}</h4>
          {renderDirections(userDirections)}
          <h4>Directions for Friend to {props.business.name}</h4>
          {renderDirections(friendDirections)}
          <button disabled={statsLogged} onClick={logMeeting}>
            {!statsLogged ? 'We Met Here!' : 'Stats updated'}
          </button>
          <button disabled={favorite} onClick={addFavorite}>
            {!favorite
              ? 'Add Restaurant to Favorites'
              : 'Favorite Added'}
          </button>
          <button onClick={() => props.history.push('/home')}>
            Cancel/Go Home
          </button>
        </Wrapper>
      )}
    </>
  );
};

export default Map;
