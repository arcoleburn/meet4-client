import { Link } from 'react-router-dom';
import TokenService from '../../Services/tokenService';

import logo from '../../images/logo.png';
import {HeaderWrapper, Logout,Login} from './Header.styles'
const Header = (props) => {
  const handleLogout = () => {
    TokenService.clearAuthToken();
    props.setUserId(null);
  };

  const renderLogoutLink = () => {
    return (
    
    <>
    <Link to ='/'>
      <img   src={logo} alt='logo'/>
  </Link>
    <Logout>
      <p>{props.username}</p>
      <Link onClick={handleLogout} to="/">
        Logout
      </Link>
      </Logout>
    
    </>);
  };

  const renderLoginLink = () => {
    return (
      <>
        <Link to ='/'>
      <img   src={logo} alt='logo'/>
  </Link>
      <Login>
        <Link to="login">|Login|</Link>
      </Login>
      </>
    );
  };
  return (
    <HeaderWrapper>
      <Link className='title' to="/">
        <h1>Meet4</h1>
      </Link>
      {TokenService.hasAuthToken()
        ? renderLogoutLink()
        : renderLoginLink()}
    </HeaderWrapper>
  );
};

export default Header