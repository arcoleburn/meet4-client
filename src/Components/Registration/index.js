import RegistrationForm from './form'

const RegistrationPage = (props) => {
  const handleRegSuccess = (user) => {
    const { history } = props;
    history.push('/login');
  };

  return (
    <>
      <h2>Register</h2>
      <RegistrationForm onRegSuccess={handleRegSuccess} />
    </>
  );
};

export default RegistrationPage;