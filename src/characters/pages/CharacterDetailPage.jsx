import { Navigate, useNavigate, useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
export const CharacterDetailPage = () => {
  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  const { data, isLoading, hasError, error } = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (hasError) {
    return <Navigate to='/characters' />;
  }

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <section className='container max-w-[600px] md:w-1/2 mx-auto px-6 md:px-0 animate__animated animate__fadeIn'>
      <h1 className='text-center font-bold text-3xl my-8'>
        Character Detail
      </h1>

      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <div className='card card-side bg-base-300 shadow-sm flex-col w-64 md:w-full md:flex-row mx-auto '>
            <figure>
              <img
                src={data.image}
                alt={data.name}
                className='w-64 object-cover'
                loading='lazy'
              />
            </figure>
            <div className='card-body justify-center'>
              <div className='w-full flex justify-between items-end'>
                <h2 className='card-title text-2xl'>{data.name}</h2>
              </div>

              <span>
                <b>Status: </b> {data.status}
              </span>
              <span>
                <b>Species: </b> {data.species}
              </span>
              <span>
                <b>Gender:</b> {data.gender}
              </span>
              {data.type && (
                <span>
                  <b>Type:</b> {data.type}
                </span>
              )}
              <span>
                <b>Origin:</b> {data.origin.name}
              </span>
              <span className='p-0'>
                <b>Last known ubication:</b> {data.location.name}
              </span>
            </div>
          </div>
          {hasError && <p>{error}</p>}
          <button
            className='btn btn-primary mt-8'
            onClick={onNavigateBack}
          >
            Back
          </button>
        </>
      )}
    </section>
  );
};
