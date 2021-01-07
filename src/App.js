import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import TokenService from './Services/tokenService';

import PublicOnlyRoute from './Components/Utils/PublicRoute';
import PrivateRoute from './Components/Utils/PrivateRoute';

import Home from './Components/Home'
import LandingPage from './Components/LandingPage';
import Header from './Components/Header';
import RegistrationPage from './Components/Registration';
import LoginPage from './Components/Login';
import Meet from './Components/Meet'
import Profile from './Profile';
import FriendsPage from './Components/FriendsPage';
import Locations from './Components/Locations'
import Favorites from './Components/Favorites';
import AddLocation from './Components/AddLocation'

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (!TokenService.getAuthToken()) return;
    if (TokenService.getAuthToken() && userId == null) {
      setUserId(jwt.decode(TokenService.getAuthToken()).userId);
    }
  }, [userId]);

  return (
    <>
      <Router>
        <Header setUserId={setUserId} />
        <Switch>
          <PublicOnlyRoute
            exact
            path="/"
            component={(props) => (
              <LandingPage {...props} setUserId={setUserId} />
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
                <LoginPage {...props} setUserId={setUserId} />
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
            component={(props) => <Profile {...props} />}
          />
            <PrivateRoute
            exact
            path="/friends"
            component={(props) => <FriendsPage {...props} />}
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
        </Switch>
      </Router>
    </>
  );
}
export default App;
