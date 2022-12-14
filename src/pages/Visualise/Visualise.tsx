import './visualise.scss';
import { useAuth0 } from '@auth0/auth0-react';

const Visualise = () => {
  const { user, logout } = useAuth0();

  return <div>Visualise</div>;
};

export default Visualise;
