import './style.scss';

import logo from '../../assets/logo1.png';
import Button from '../Button/Button';

const Header = ({ onSignin }: { onSignin: () => void }) => {
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
            onClick={onSignin}
            title='Sign In'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
