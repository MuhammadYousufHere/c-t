import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import More from '../pages/Home/More';
import Visualise from '../pages/Visualise';
import PrivateRoute from './PrivateRotes';
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <div className='container-fluid pt-3'>
              <Home />
            </div>
            <More />
            <Footer />
          </>
        }
      />
      <Route element={<PrivateRoute />}>
        <Route
          path='/visualise'
          element={<Visualise />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
