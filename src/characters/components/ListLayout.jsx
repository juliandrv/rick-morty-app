import { memo } from 'react';
import { ListItem } from './ListItem';

const MemoizedListItem = memo(ListItem);

export const ListLayout = ({ data, isLoading, hasError, error }) => {
  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {data?.results.map((item) => (
            <MemoizedListItem key={item.id} {...item} />
          ))}
        </div>
      )}
      {!isLoading && hasError && <p>{error}</p>}
    </>
  );
};
