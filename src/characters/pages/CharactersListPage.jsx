import { useFetch } from '../../hooks/useFetch';
import { ListLayout } from '../../ui/components/ListLayout';

export const CharactersListPage = () => {
  const { data, isLoading, hasError, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );

  return (
    <>
      <h1>Characters</h1>
      <hr />

      <ListLayout
        data={data}
        isLoading={isLoading}
        hasError={hasError}
        error={error}
      />
    </>
  );
};
