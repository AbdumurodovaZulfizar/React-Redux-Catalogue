import React from 'react';
import '../index.css';
import '../variable.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark header fixed-top">
      <div class="container-fluid fixed-top">
      <Link to="/" className="nav-link text-white logo"><h1>Delicious</h1></Link>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          
        </ul>
        <form class="d-flex">
        <Link to="/category" className="text-decoration-none"><span class="mx-2 font nav-link text-white" type="submit">Food Categories</span></Link>
          <Link to="/sign_in"><button class="btn mx-2 sign_up rounded-pill font" type="submit">Sign Up</button></Link>
          <Link to="/sign_up"><button class="btn sign_in rounded-pill font" type="submit">Log In</button></Link>
        </form>
      </div>
    </div>
  </nav>
</header>
  )
}

