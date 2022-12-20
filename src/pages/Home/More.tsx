import { Link } from 'react-router-dom';
import './more.scss';
const More = () => {
  return (
    <section className='container-xxl section cta-banner-select sign-up-banner'>
      <div className='container mx-5'>
        <div className='row mx-2'>
          <div className='col-lg-8 col-md-7 col-12 text-wrap'>
            <h3 className='title-3 '>
              Go beyond your sense to supercharge your analytics
            </h3>
            <Link
              to='/login'
              className='btn yellow'
              data-google-tag-manager-id='sign-up-free'
            >
              <span className='btn-title'>See How</span>
            </Link>
          </div>
        </div>
      </div>
      <img
        src='https://home.vizlib.com/wp-content/themes/vizlib/img/abstract/absract-banner-illustration-2.svg'
        alt='abstract illustration'
        className='cta-banner-select-img-illustration'
      />
      <img
        src='https://home.vizlib.com/wp-content/themes/vizlib/img/abstract/absract-lines.svg'
        alt='abstract illustration'
        className='cta-banner-select-img-object'
      />
    </section>
  );
};

export default More;
