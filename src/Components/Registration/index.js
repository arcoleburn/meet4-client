import RegistrationForm from './form'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png';

import {RegLoginWrapper} from '../Login/Login.styles'
const RegistrationPage = (props) => {
  const handleRegSuccess = (user) => {
    const { history } = props;
    history.push('/login');
  };

  return (
    <RegLoginWrapper>
      <img src={logo}/>
      <h2>Register</h2>
      <RegistrationForm onRegSuccess={handleRegSuccess} />
      
      <Link to="/login">Have an account? Login Here!</Link>
    </RegLoginWrapper>
  );
};

export default RegistrationPage;