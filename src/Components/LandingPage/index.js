import React from 'react';
import TokenService from '../../Services/tokenService';
import authApiService from '../../Services/authApiService';
import jwt from 'jsonwebtoken';
import { Wrapper } from './landingPage.styles';
import { useState } from 'react';
import { Spinner } from '../Utils/spinner.styles';
const LandingPage = (props) => {
  const [loading, setLoading] = useState(false);
  const handleLoginSuccess = () => {
    console.log('login suc');
    const { location, history } = props;
    const destination = (location.state || {}).from || '/home';

    props.setUserId(jwt.decode(TokenService.getAuthToken()).userId);
    props.setUsername(
      jwt.decode(TokenService.getAuthToken()).username
    );

    history.push(destination);
  };

  const handleDemoClick = (e) => {
    e.preventDefault();
    setLoading(true);
    authApiService
      .postLogin({
        username: 'demoUser',
        password: 'Password123',
      })
      .then((res) => {
        if (!res.status === 200) {
          return res.json().then((err) => {
            Promise.reject(err);
            setLoading(false);
          });
        } else {
          TokenService.saveAuthToken(res.authToken);
          setLoading(false);
          handleLoginSuccess();
        }
      })
      .catch((res) => {});
  };

  return (
    <Wrapper>
      <h1>Meet4</h1>

      <div>
        <p>
          Meeting up with friends can be tough. Everyone has a crazy
          schedule. Hop on the subway and meet in the middle.
        </p>

        <h4>How it works</h4>
        <li>Select what you want to meet4: Pizza, Beer, or Coffee</li>
        <li>
          Select one of your saved locations, or input an address from
          scratch
        </li>
        <li>
          Select a friend and select one of their saved addresses, or
          input their location from scratch
        </li>
        <li>Hit go!</li>

        <p>
          The Meet4 algorithm will find the midpoint between your two
          locations by subway, and then query Yelp to find a selection
          of pizza shops, coffee shops, or bars nearby where you can
          meet your friend. Once you pick one, we use GoogleMaps to
          get you transit directions right from the app.
        </p>
        <p>
          All our results have a '$' rating on Yelp, so don't worry
          about breaking the bank!
        </p>
        {loading && <Spinner/>}
        <button onClick={handleDemoClick}>
          Click Here to Launch Demo
        </button>
      </div>
    </Wrapper>
  );
};

export default LandingPage;
