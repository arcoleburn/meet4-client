import { Link } from 'react-router-dom';
import TokenService from '../../Services/tokenService';

const Header = (props) => {
  const handleLogout = () => {
    TokenService.clearAuthToken();
    props.setUserId(null);
  };

  const renderLogoutLink = () => {
    return (
      <Link onClick={handleLogout} to="/">
        Logout
      </Link>
    );
  };

  const renderLoginLink = () => {
    return (
      <>
        <Link to="register">|Register|</Link>
        <Link to="login">|Login|</Link>
      </>
    );
  };
  return (
    <>
      <Link to="/home">
        <h1>Meet4</h1>
      </Link>
      {TokenService.hasAuthToken()
        ? renderLogoutLink()
        : renderLoginLink()}
    </>
  );
};

export default Header