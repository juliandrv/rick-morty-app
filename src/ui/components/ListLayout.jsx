export const ListLayout = ({ data, isLoading, hasError, error }) => {
  return (
    <div className='list-layout'>
      {isLoading ? (
        'Loading...'
      ) : (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
          {data.results.map((item) => (
            <p key={item.id}>{item?.name}</p>
          ))}
        </div>
      )}

      {!isLoading && hasError && <p>{error}</p>}
    </div>
  );
};
