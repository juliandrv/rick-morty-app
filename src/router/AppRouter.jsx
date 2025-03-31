import { Navigate, Route, Routes } from 'react-router';
import { LoginPage } from '../auth/LoginPage';
import { CharactersRoutes } from '../characters/routes/CharactersRoutes';
import { LocationRoutes } from '../locations/routes/LocationRoutes';
import { Navbar } from '../ui/components/Navbar';
import { SearchPage } from '../SearchPage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Login sin Navbar */}
        <Route path='/login' element={<LoginPage />} />

        {/* Rutas con Navbar */}
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
                <Route path='Search' element={<SearchPage />} />
                <Route
                  path='*'
                  element={<Navigate to='/characters' />}
                />
              </Routes>
            </>
          }
        />
      </Routes>
    </>
  );
};
