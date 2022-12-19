import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader';
import Signin from '../pages/Signin';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  return isAuthenticated ? <Outlet /> : <Signin />;
};

export default PrivateRoute;
