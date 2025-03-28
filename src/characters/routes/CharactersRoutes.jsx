import { Route, Routes } from 'react-router';
import { CharactersListPage } from '../pages/CharactersListPage';
import { CharacterDetailPage } from '../pages/CharacterDetailPage';

export const CharactersRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<CharactersListPage />} />
        <Route path=':id' element={<CharacterDetailPage />} />
      </Routes>
    </>
  );
};
