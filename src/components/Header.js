import React from 'react';
import '../index.css';
import '../variable.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
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
        <Link to="/category" className="text-decoration-none"><span className="mx-2 font nav-link text-white" type="submit">Food Categories</span></Link>
          <Link to="/sign_in"><button className="btn mx-2 sign_up rounded-pill font" type="submit">Sign Up</button></Link>
          <Link to="/sign_up"><button className="btn sign_in rounded-pill font" type="submit">Log In</button></Link>
        </form>
      </div>
    </div>
  </nav>
</header>
  )
}

