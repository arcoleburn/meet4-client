import React from 'react';

import { Link } from 'react-router-dom';

import {HomeWrapper} from './Home.styles'

const Home = (props) => {


  return (
  
    <HomeWrapper>
    <Link to='/meet'>Meet! </Link>
    <Link to='/profile'>Profile </Link>
  <Link to='/friends'>Friends </Link>
  <Link to='/favorites'>Favorites </Link>
  </HomeWrapper>
 
  )
}

export default Home;
