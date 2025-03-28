import { Link, NavLink, useNavigate } from 'react-router';

export const Navbar = () => {
  const navitage = useNavigate();

  const handleLogout = () => {
    navitage('/login', { replace: true });
  };

  return (
    <div className='navbar bg-base-100 shadow-sm '>
      <div className='navbar-start '>
        <Link to='/' className='text-xl font-bold'>
          Rick&Morty
        </Link>
      </div>

      <div className='flex navbar-center gap-6 '>
        <NavLink
          to='/characters'
          className={({ isActive }) =>
            `${isActive ? 'font-bold' : ''}`
          }
        >
          Characters
        </NavLink>
        <NavLink
          to='/locations'
          className={({ isActive }) =>
            `${isActive ? 'font-bold' : ''}`
          }
        >
          Locations
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            `${isActive ? 'font-bold' : ''}`
          }
        >
          About
        </NavLink>
      </div>

      <div className='navbar-end flex items-center gap-4 '>
        <NavLink to='/login' className='btn btn-primary'>
          Login
        </NavLink>
        <span className='text-blue-400'>Julián</span>
        <button onClick={handleLogout} className='btn btn-ghost'>
          Logout
        </button>
      </div>
    </div>
  );
};
