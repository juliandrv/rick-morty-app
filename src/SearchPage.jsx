import { useLocation, useNavigate } from 'react-router';
import { useForm } from './hooks/useForm';
import { useFetch } from './hooks/useFetch';
import { memo, useMemo } from 'react';
import { ListLayout } from './characters/components/ListLayout';

// Memoize static components
const MemoizedListLayout = memo(ListLayout);

// Memoize the search icon to prevent re-renders
const SearchIcon = memo(() => (
  <svg
    className='h-[1em]'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
  >
    <g
      strokeLinejoin='round'
      strokeLinecap='round'
      strokeWidth='2.5'
      fill='none'
      stroke='white'
    >
      <circle cx='11' cy='11' r='8'></circle>
      <path d='m21 21-4.3-4.3'></path>
    </g>
  </svg>
));

// Memoize alert icons
const SuccessIcon = memo(() => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 shrink-0 stroke-current'
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
));

const ErrorIcon = memo(() => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 shrink-0 stroke-current'
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
));

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize query parsing
  const q = useMemo(() => {
    const query = new URLSearchParams(location.search);
    return query.get('q') || '';
  }, [location.search]);

  // Memoize API URL
  const apiUrl = useMemo(
    () =>
      q
        ? `https://rickandmortyapi.com/api/character/?name=${q}`
        : null,
    [q]
  );

  // Use the useFetch hook with the memoized URL
  const { data, isLoading, hasError } = useFetch(apiUrl);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: '',
  });

  // Memoize the submit handler
  const onSearchSubmit = useMemo(
    () => (event) => {
      event.preventDefault();
      if (searchText.trim().length <= 1) return;

      navigate(`?q=${searchText.toLowerCase().trim()}`);
      onResetForm();
    },
    [searchText, navigate, onResetForm]
  );

  // Memoize the results message
  const resultsMessage = useMemo(() => {
    if (!data?.results) return null;
    return `${data.results.length} results for "${q}"`;
  }, [data?.results, q]);

  return (
    <section className='container mx-auto px-4'>
      <h1 className='text-center font-bold text-3xl my-8'>
        Find a character
      </h1>

      <form
        onSubmit={onSearchSubmit}
        className='join w-full inline-block text-center'
      >
        <label className='input join-item'>
          <input
            type='search'
            className='grow'
            placeholder='Type here...'
            name='searchText'
            autoComplete='off'
            value={searchText}
            onChange={onInputChange}
          />
        </label>

        <button className='btn btn-primary join-item'>
          <SearchIcon />
        </button>
      </form>

      <div className='mt-8'>
        {!isLoading && !hasError && data?.results && (
          <div role='alert' className='alert alert-success mb-6'>
            <SuccessIcon />
            <span>
              <b>{resultsMessage}</b>
            </span>
          </div>
        )}

        {!isLoading && hasError && (
          <div role='alert' className='alert alert-error'>
            <ErrorIcon />
            <span>
              0 results for <b>"{q}"</b>. Try again
            </span>
          </div>
        )}

        {data && q && (
          <MemoizedListLayout
            data={data}
            isLoading={isLoading}
            hasError={hasError}
          />
        )}
      </div>
    </section>
  );
};
