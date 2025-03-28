import { useFetch } from '../../hooks/useFetch';
import { ListLayout } from '../../ui/components/ListLayout';

export const LocationListPage = () => {
  const { data, isLoading, hasError, error } = useFetch(
    'https://rickandmortyapi.com/api/location'
  );

  return (
    <>
      <h1>Locations</h1>
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
