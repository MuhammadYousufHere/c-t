import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CountryLatest } from '../../api';
import './visualise.scss';
import logo from '../../assets/logo1.png';

import { useAuth0 } from '@auth0/auth0-react';
import DropdownSearch from '../../components/Dropdown/dropdownSearch';
import { Link } from 'react-router-dom';
import Doughnut from './Doughnut';
import useCovidData from '../../hooks/useCovidData';

// ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const Visualise = () => {
  const { user } = useAuth0();
  const { countries, dataByCountry, keys, values } = useCovidData();
  const [dropDownItem, setDropdownItem] = useState<string>('Pakistan');
  const [chartData, setChartData] = useState<CountryLatest>(
    {} as CountryLatest
  );

  useEffect(() => {
    setChartData(dataByCountry(dropDownItem)[0]);
  }, [dropDownItem, dataByCountry]);

  const data = {
    labels: keys.slice(0, 10),
    datasets: [
      {
        label: 'Infected',
        data: values.slice(0, 10).map((value) => value.total_cases),
        fill: false,
        backgroundColor: 'rgba(35, 339, 32, 0.2)',
        borderColor: 'rgba(20, 60, 32, 1)',
      },
      {
        label: 'total vacc',
        data: values.slice(0, 10).map((value) => value.total_vaccinations),
        fill: false,
        backgroundColor: 'rgba(255, 99, 5, 0.4)',
        borderColor: 'rgba(255, 99, 13, 0.8)',
      },
      {
        label: 'people fully vacc',
        data: values.slice(0, 10).map((value) => value.people_fully_vaccinated),
        fill: false,
        backgroundColor: 'rgba(2, 9, 132, 0.2)',
        borderColor: 'rgba(2, 50, 132, 1)',
      },
      {
        label: 'Totoal deaths',
        data: values.slice(0, 10).map((value) => value.total_deaths),
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <div className='visualise container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link
            className='navbar-brand'
            to='/'
          >
            <div className='nav-frame'>
              <figure className='pageLogo'>
                <img
                  src={logo}
                  className='pageLogo__image h-25 w-25'
                  alt='LOGO'
                />
              </figure>
            </div>
          </Link>
          <div className='d-flex'>
            <p className='mx-2 m-0'>{user?.name}</p>
            <img
              src={user?.picture}
              className='rounded-circle shadow-1-strong me-2'
              height='22'
              alt='Avatar'
              loading='lazy'
            />
          </div>
        </div>
      </nav>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <DropdownSearch
            setDropdownItem={setDropdownItem}
            dropDownItem={dropDownItem}
            dropDownData={countries}
            selectedCountryName={() => {}}
          />
        </div>
        <div className='col-3'></div>
      </div>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
          <Doughnut chartData={chartData} />
        </div>
        <div className='col-2'></div>
      </div>

      <div className='row'>
        <div className='col-12 m-5'>
          <Line
            options={options}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default Visualise;
