import { useAuth0 } from '@auth0/auth0-react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Containgen from './Containgen';
import './HomeStyles.scss';
import Info from './Info';
const Home = () => {
  const { loginWithRedirect } = useAuth0();

  const authToVisualise = () => {
    loginWithRedirect();
  };
  return (
    <div className='home'>
      <Header onSignin={authToVisualise} />

      <section className='section hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6 text-position'>
              <h2 className='section__title'>COVID-19 Tracker</h2>
              <span className='section__span'>
                Stay at Home quarantine To stop Corona virus
              </span>
              <p className='section__desc'>
                There is no specific medicine to prevent or treat coronavirus
                disease (COVID-19). People may need supportive care to .
              </p>
              <Button
                variant='primary'
                title='I Want To Know More'
                onClick={authToVisualise}
              />
            </div>
            <div className='col-12 col-md-6 col-lg-6 text-position img-sec'>
              <img
                src='https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/section-image.svg'
                className='section__image'
                alt='Quarantine'
              />
              <img
                src='https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/section-virus.svg'
                className='section__virus1'
                alt=''
              />
              <img
                src='https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/section-virus.svg'
                className='section__virus2'
                alt=''
              />
              <img
                src='https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/section-virus.svg'
                className='section__virus3'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
      <Info />
      <Containgen />
    </div>
  );
};

export default Home;
