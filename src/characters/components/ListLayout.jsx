// characters/components/ListLayout.jsx
import { memo } from 'react';
import { ListItem } from './ListItem';

const MemoizedListItem = memo(ListItem);

export const ListLayout = ({
  data,
  isLoading,
  hasError,
  error,
  currentPage,
  onPageChange,
}) => {
  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>{error}</div>;
  if (!data?.results) return null;

  const { info, results } = data;

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {results.map((item) => (
          <MemoizedListItem key={item.id} {...item} />
        ))}
      </div>

      {/* Unified Pagination Component */}
      {info && info.pages > 1 && (
        <div className='join flex justify-center mt-8'>
          <button
            className='join-item btn btn-primary'
            onClick={() => onPageChange(currentPage - 1)}
            disabled={!info.prev}
          >
            «
          </button>

          <button className='join-item btn pointer-events-none'>
            Page {currentPage} of {info.pages}
          </button>

          <button
            className='join-item btn btn-primary'
            onClick={() => onPageChange(currentPage + 1)}
            disabled={!info.next}
          >
            »
          </button>
        </div>
      )}
    </>
  );
};
