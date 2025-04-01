import { Navigate, Route, Routes } from 'react-router';
import { LoginPage } from '../auth/LoginPage';
import { CharactersRoutes } from '../characters/routes/CharactersRoutes';
import { LocationRoutes } from '../locations/routes/LocationRoutes';
import { Navbar } from '../ui/components/Navbar';
import { SearchPage } from '../SearchPage';
import { Footer } from '../ui/components/Footer';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />

      <Route
        path='/login'
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path='/*'
        element={
          <PrivateRoute>
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
                element={<Navigate to='/characters' />}
              />
            </Routes>
            <Footer />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
