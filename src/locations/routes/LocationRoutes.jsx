import { Route, Routes } from 'react-router';
import { LocationListPage } from '../pages/LocationListPage';

export const LocationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LocationListPage />} />
      </Routes>
    </>
  );
};
