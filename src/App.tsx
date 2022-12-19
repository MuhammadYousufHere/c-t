import { useEffect, useState } from 'react';

import Loader from './components/Loader';

import AppRoutes from './routes/AppRoutes';

function App() {
  const url = `https://covid-19.nyc3.digitaloceanspaces.com/public/owid-covid-data.json`;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //iife
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    })();

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) return <Loader />;

  return <AppRoutes />;
}

export default App;
