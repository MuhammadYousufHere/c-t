import { Link } from 'react-router-dom';
import './info.scss';

const Info = () => {
  return (
    <section className='section coronavirus'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-6 text-position'>
            <figure className='covidImage'>
              <img
                src='https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/main/Covid-19/img/covid-image.png'
                className='covidImage__image'
                alt='Corona Virus'
              />
            </figure>
          </div>
          <div className='col-12 col-md-6 col-lg-6 text-position'>
            <h1 className='coronavirus__title'>What Is Covid-19</h1>
            <span className='coronavirus__span'>Coronavirus</span>
            <p className='coronavirus__desc'>
              Corona viruses are a type of virus. There are many different
              kinds, and some cause disease. A newly identified type has caused
              a recent outbreak of respiratory illness now called
              COVID-19.Lauren Sauer, M.S., the director of operations with the
              Johns Hopkins Office of Critical Event Preparedness and Response
            </p>
            <Link
              to='/visualise'
              className='coronavirus__button'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
