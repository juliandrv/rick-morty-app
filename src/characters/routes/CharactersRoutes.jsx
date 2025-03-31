import { Navigate, Route, Routes } from 'react-router';
import { CharactersListPage } from '../pages/CharactersListPage';
import { CharacterDetailPage } from '../pages/CharacterDetailPage';

export const CharactersRoutes = () => {
  return (
    <Routes>
      {/* Redirect from base path to page/1 */}
      <Route
        path='/'
        element={<Navigate to='/characters/page/1' replace />}
      />

      {/* Handle paginated list */}
      <Route path='/page/:page' element={<CharactersListPage />} />

      {/* Handle character details */}
      <Route path=':id' element={<CharacterDetailPage />} />

      {/* Catch all redirect */}
      <Route
        path='*'
        element={<Navigate to='/characters/page/1' replace />}
      />
    </Routes>
  );
};
