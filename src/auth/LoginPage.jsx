import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from './context/AuthContext';

export const LoginPage = () => {
  const { onLogin } = useContext(AuthContext);
  const navitage = useNavigate();

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    onLogin('Julián');
    navitage(lastPath, { replace: true });
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
