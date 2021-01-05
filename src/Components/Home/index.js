import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {


  return (
    <>
    <h2>Home</h2>
    <Link to='/meet'>Meet! </Link>
    <Link to='/profile'>Profile </Link>
  <Link to='/friends'>Friends </Link>
  <Link to='/favorites'>Favorites </Link>
  </>
  )
}

export default Home;
