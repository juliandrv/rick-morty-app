import { useNavigate, useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { ListLayout } from '../components/ListLayout';

export const LocationListPage = () => {
  const navigate = useNavigate();
  const { page = 1 } = useParams();
  const currentPage = parseInt(page);

  const { data, isLoading, hasError, error } = useFetch(
    `https://rickandmortyapi.com/api/location?page=${currentPage}`
  );

  const handlePageChange = (newPage) => {
    navigate(`/locations/page/${newPage}`);
  };

  return (
    <section className='container mx-auto px-4'>
      <h1 className='text-center font-bold text-3xl my-8'>
        Locations
      </h1>

      <ListLayout
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
