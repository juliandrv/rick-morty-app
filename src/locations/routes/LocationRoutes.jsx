import { Route, Routes } from 'react-router';
import { LocationListPage } from '../pages/LocationListPage';
import { LocationDetailPage } from '../pages/LocationDetailPage';

export const LocationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LocationListPage />} />
        <Route path=':id' element={<LocationDetailPage />} />
      </Routes>
    </>
  );
};
