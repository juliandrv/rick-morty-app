import { useNavigate } from 'react-router';

export const LoginPage = () => {
  const navitage = useNavigate();

  const handleLogin = () => {
    navitage('/', { replace: true });
  };

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-center text-2xl font-bold py-4'>
          LoginPage
        </h1>
        <hr />
        <button
          onClick={handleLogin}
          className='btn btn-primary mt-4 m-auto block'
        >
          Login
        </button>
      </div>
    </>
  );
};
