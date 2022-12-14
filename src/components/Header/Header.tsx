import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import './style.scss';

import logo from '../../assets/logo1.png';
import Button from '../Button/Button';

const Header = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <header className='header '>
      <div className='container d-flex justify-content-between'>
        <div className='nav-frame'>
          <figure className='pageLogo'>
            <img
              src={logo}
              className='pageLogo__image'
              alt='LOGO'
            />
          </figure>
        </div>
        <div className='action-btn'>
          <Button
            variant='outlined'
            onClick={() => loginWithRedirect()}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
