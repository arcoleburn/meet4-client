import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import TokenService from './Services/tokenService';

import PublicOnlyRoute from './Components/Utils/PublicRoute';
import PrivateRoute from './Components/Utils/PrivateRoute';
import ErrorBoundary from './Components/Utils/ErrorBoundary'
import {AppWrapper} from './App.styles'

import Home from './Components/Home'
import LandingPage from './Components/LandingPage';
import Header from './Components/Header';
import RegistrationPage from './Components/Registration';
import LoginPage from './Components/Login';
import Meet from './Components/Meet'
import Profile from './Components/Profile';
import FriendsPage from './Components/FriendsPage';
import Locations from './Components/Locations'
import Favorites from './Components/Favorites';
import AddLocation from './Components/Locations/AddLocation'
import FriendRequests from './Components/FriendsPage/FriendRequests';
import AddFriend from './Components/FriendsPage/addFriend'

function App() {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('')
  useEffect(() => {
    if (!TokenService.getAuthToken()) return;
    if (TokenService.getAuthToken() && userId == null) {
      setUserId(jwt.decode(TokenService.getAuthToken()).userId);
      setUsername(jwt.decode(TokenService.getAuthToken()).username)
    }
  }, [userId]);

  return (
    <AppWrapper>
    <ErrorBoundary>
      <Router>
        <Header setUserId={setUserId} username={username} />
        <Switch>
          <PublicOnlyRoute
            exact
            path="/"
            component={(props) => (
              <LandingPage {...props} setUserId={setUserId} setUsername={setUsername} />
            )}
          />
          <PublicOnlyRoute
            exact
            path="/register"
            component={RegistrationPage}
          />
          <PublicOnlyRoute
            exact
            path="/login"
            component={(props) => (
              <>
                <LoginPage {...props} setUserId={setUserId} setUsername={setUsername} />
              </>
            )}
          />
          <PrivateRoute
            exact
            path="/home"
            component={(props) => <Home {...props} />}
          />
            <PrivateRoute
            exact
            path="/meet"
            component={(props) => <Meet {...props} />}
          />
           <PrivateRoute
            exact
            path="/profile"
            component={(props) => <Profile {...props} username={username}/>}
          />
            <PrivateRoute
            exact
            path="/friends"
            component={(props) => <FriendsPage {...props} />}
          /> 
          <PrivateRoute
          exact
          path="/requests"
          component={(props) => <FriendRequests {...props} />}
        />
          <PrivateRoute
            exact
            path="/locations"
            component={(props) => <Locations {...props} />}
          />
          <PrivateRoute
            exact
            path="/favorites"
            component={(props) => <Favorites {...props} />}
          />
           <PrivateRoute
            exact
            path="/addLocation"
            component={(props) => <AddLocation {...props} />}
          />
            <PrivateRoute
            exact
            path="/addFriend"
            component={(props) => <AddFriend {...props} />}
          />
        </Switch>
      </Router>
    </ErrorBoundary>
    </AppWrapper>
  );
}
export default App;
