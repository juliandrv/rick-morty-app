import { memo } from 'react';
import { ListItem } from './ListItem';

export const ListLayout = memo(
  ({
    data,
    isLoading,
    hasError,
    error,
    currentPage,
    onPageChange,
  }) => {
    if (isLoading) {
      return (
        <div className='flex justify-center items-center min-h-[200px]'>
          <span className='loading loading-spinner loading-lg'></span>
        </div>
      );
    }

    if (hasError) {
      return (
        <div className='alert alert-error'>
          <span>{error}</span>
        </div>
      );
    }

    if (!data?.results) return null;

    return (
      <>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {data.results.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </div>

        {/* Pagination Controls */}
        {data.info && (
          <div className='join flex justify-center mt-8'>
            <button
              className='join-item btn btn-primary'
              onClick={() => onPageChange(currentPage - 1)}
              disabled={!data.info.prev}
            >
              «
            </button>

            <button className='join-item btn pointer-events-none'>
              Page {currentPage} of {data.info.pages}
            </button>

            <button
              className='join-item btn btn-primary'
              onClick={() => onPageChange(currentPage + 1)}
              disabled={!data.info.next}
            >
              »
            </button>
          </div>
        )}
      </>
    );
  }
);
