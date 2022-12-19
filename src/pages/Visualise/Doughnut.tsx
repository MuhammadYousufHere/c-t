import { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut as CircularDoughnut } from 'react-chartjs-2';
import { CountryLatest } from '../../api';

ChartJS.register(ArcElement, Tooltip, Legend);
interface Props {
  chartData: CountryLatest;
}
const Doughnut: FC<Props> = ({ chartData }) => {
  const data = {
    labels: ['Infected', 'Recovered', 'Deaths', 'New Cases', 'New Deaths'],
    datasets: [
      {
        label: 'People',
        backgroundColor: [
          'rgba(0, 0, 255, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
          'rgba(255, 255, 0, 0.5)',
          'rgba(255, 0, 255, 0.5)',
        ],
        data: [
          chartData?.total_cases,
          chartData?.total_vaccinations,
          chartData?.total_deaths,
          chartData?.new_cases,
          chartData?.new_deaths,
        ],
      },
    ],
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <CircularDoughnut data={data} />
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  );
};

export default Doughnut;
