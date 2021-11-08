import React from 'react';
import '../index.css';
import '../variable.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header data-testid="1">
    <nav className="navbar navbar-expand-md navbar-dark header fixed-top">
      <div className="container-fluid fixed-top">
        <Link to="/" className="nav-link text-white logo px-0"><h1>Delicious</h1></Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
          </ul>
          <form className="d-flex">
            <Link to="/category" className="text-decoration-none collapsed"><span className="mx-2 font nav-link text-white" type="submit" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">Food Categories</span></Link>
            <Link to="/sign_in" className="collapsed"><button className="btn mx-2 sign_up rounded-pill font" type="submit"  data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">Sign Up</button></Link>
            <Link to="/sign_up" className="collapsed"><button className="btn sign_in rounded-pill font" type="submit"  data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">Log In</button></Link>
          </form>
        </div>
      </div>
    </nav>
  </header>
)

export default Header;
