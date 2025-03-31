import { Navigate, Route, Routes } from 'react-router';
import { LoginPage } from '../auth/LoginPage';
import { CharactersRoutes } from '../characters/routes/CharactersRoutes';
import { LocationRoutes } from '../locations/routes/LocationRoutes';
import { Navbar } from '../ui/components/Navbar';
import { SearchPage } from '../SearchPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />

      <Route
        path='/*'
        element={
          <>
            <Navbar />
            <Routes>
              <Route
                path='characters/*'
                element={<CharactersRoutes />}
              />
              <Route
                path='locations/*'
                element={<LocationRoutes />}
              />
              <Route path='search' element={<SearchPage />} />
              <Route
                path='*'
                element={<Navigate to='/characters/page/1' />}
              />
            </Routes>
          </>
        }
      />
    </Routes>
  );
};
