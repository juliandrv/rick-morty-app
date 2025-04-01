import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
  const { user, logged, onLogout } = useContext(AuthContext);

  const navitage = useNavigate();

  const handleLogout = () => {
    onLogout();
    navitage('/login', { replace: true });
  };

  return (
    <div className='navbar bg-base-100 shadow-sm px-8'>
      <div className='navbar-start '>
        <Link to='/characters' className='text-xl font-bold'>
          Morty&Rick
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
          to='/search'
          className={({ isActive }) =>
            `${isActive ? 'font-bold' : ''}`
          }
        >
          Search
        </NavLink>
      </div>

      <div className='navbar-end flex items-center gap-4 '>
        <span className='text-amber-400'>{user?.name}</span>

        <button
          onClick={handleLogout}
          className='btn btn-primary btn-outline'
        >
          Logout
        </button>
      </div>
    </div>
  );
};
