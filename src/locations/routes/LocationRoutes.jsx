import { Navigate, Route, Routes } from 'react-router';
import { LocationListPage } from '../pages/LocationListPage';

export const LocationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LocationListPage />} />
        <Route path='/page/:page' element={<LocationListPage />} />
      </Routes>
    </>
  );
};
