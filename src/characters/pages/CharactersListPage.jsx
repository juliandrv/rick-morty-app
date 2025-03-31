import { memo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ListLayout } from '../components/ListLayout';
import { useNavigate, useParams } from 'react-router';

const MemoizedListLayout = memo(ListLayout);

export const CharactersListPage = () => {
  const navigate = useNavigate();
  const { page } = useParams();

  // Convert page parameter to number, default to 1 if not present
  const currentPage = page ? parseInt(page) : 1;

  const { data, isLoading, hasError, error } = useFetch(
    `https://rickandmortyapi.com/api/character?page=${currentPage}`
  );

  const handlePageChange = (newPage) => {
    navigate(`/characters/page/${newPage}`);
  };

  return (
    <section className='container mx-auto px-4'>
      <h1 className='text-center font-bold text-3xl my-8'>
        Characters
      </h1>

      <MemoizedListLayout
        data={data}
        isLoading={isLoading}
        hasError={hasError}
        error={error}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
};
