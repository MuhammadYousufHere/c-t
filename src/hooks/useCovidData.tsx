import { useEffect, useState, useMemo } from 'react';
import { CountryLatest, fetchDailyData } from '../api';
import uuid from 'react-uuid';

const useCovidData = () => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);
  const countries = useMemo(
    () =>
      Object.values(dailyData).map((item: any) => ({
        id: uuid(),
        name: item.location,
      })),
    [dailyData]
  );
  const dataByCountry = (country: string) => {
    return Object.values<CountryLatest>(dailyData).filter(
      (item: any) => item.location === country
    );
  };
  const keys = useMemo(() => Object.keys(dailyData), [dailyData]);
  const values = useMemo(
    () => Object.values<CountryLatest>(dailyData),
    [dailyData]
  );

  return {
    dailyData,
    countries,
    dataByCountry,
    keys,
    values,
  };
};

export default useCovidData;
