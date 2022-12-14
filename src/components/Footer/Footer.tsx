import './style.scss';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='d-flex align-item-center flex-column justify-content-center'>
      <section className='contact'>
        <div className='container'>
          <div className='help'>
            <p className='help__desc'>Have Question in mind? Let us help you</p>
            <form action=''>
              <input
                type='email'
                className='help__mail'
                placeholder='demo@gmail.com'
                required
              />
              <button
                type='submit'
                className='help__send'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className='text-center text-lg-start footer'>
        <div className='container d-flex justify-content-center py-5'>
          <button
            type='button'
            className='btn btn-lg btn-floating mx-2'
          >
            <FaFacebook />
          </button>
          <button
            type='button'
            className='btn btn-lg btn-floating mx-2'
          >
            <FaYoutube />
          </button>
          <button
            type='button'
            className='btn btn-lg btn-floating mx-2'
          >
            <FaInstagram />
          </button>
          <button
            type='button'
            className='btn btn-lg btn-floating mx-2'
          >
            <FaTwitter />
          </button>
        </div>

        <div className='text-center p-3'>
          © 2022 Copyright <b>Covid - 19</b>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
