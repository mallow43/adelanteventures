import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img 
            src="/images/logo.png" 
            alt="Adelante Ventures" 
            height="40"
            className="d-inline-block align-top"
          />
        </NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-semibold' : 'text-muted'}`
                } 
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-semibold' : 'text-muted'}`
                } 
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
