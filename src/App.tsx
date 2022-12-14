import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import More from './pages/Home/More';

function App() {
  // const url = `https://covid-19.nyc3.digitaloceanspaces.com/public/owid-covid-data.json`;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) return <Loader />;

  return (
    <>
      <div className='container-fluid pt-3'>
        <Home />
      </div>
      <More />
      <Footer />
    </>
  );
}

export default App;
