import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { isAuthenticated, user, signout } = useAuth();
  return (
    <>
      <nav
        className='navbar navbar-expand-md navbar-dark bg-dark'
        aria-label='Fourth navbar example'
      >
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            My blog
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarsExample04'
            aria-controls='navbarsExample04'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarsExample04'>
            <ul className='navbar-nav ms-auto mb-2 mb-md-0'>
              {isAuthenticated ? (
                <>
                  <li className='nav-item'>
                    <div className='nav-link'>Welcome {user.name}</div>
                  </li>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link active' aria-current='page'>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item' style={{ cursor: 'pointer' }} onClick={signout}>
                    <div className='nav-link'>Logout</div>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link active' aria-current='page'>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/register' className='nav-link' aria-current='page'>
                      Register
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/login' className='nav-link' aria-current='page'>
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;