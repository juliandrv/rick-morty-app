import { ListItem } from './ListItem';

export const ListLayout = ({ data, isLoading, hasError, error }) => {
  return (
    <div className='container mx-auto px-6 sm:px-0'>
      {isLoading ? (
        'Loading...'
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {data.results.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </div>
      )}

      {!isLoading && hasError && <p>{error}</p>}
    </div>
  );
};
