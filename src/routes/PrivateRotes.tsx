import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to='/'
      replace
    />
  );
};

export default PrivateRoute;
