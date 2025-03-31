import { memo, useMemo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ListLayout } from '../components/ListLayout';

const MemoizedListLayout = memo(ListLayout);

export const CharactersListPage = () => {
  const { data, isLoading, hasError, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );

  // Memoize any data transformations if needed
  const processedData = useMemo(() => {
    if (!data) return null;
    return {
      ...data,
      // Add any data transformations here if needed
    };
  }, [data]);

  return (
    <section className='container mx-auto px-4'>
      <h1 className='text-center font-bold text-3xl my-8'>
        Characters
      </h1>

      <MemoizedListLayout
        data={processedData}
        isLoading={isLoading}
        hasError={hasError}
        error={error}
      />
    </section>
  );
};
