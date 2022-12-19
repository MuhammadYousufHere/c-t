import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '../../components/Loader';
const Signin = () => {
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);
  return <Loader />;
};

export default Signin;
