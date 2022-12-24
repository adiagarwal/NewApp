import React from 'react';

export default function Nav() {
  return (
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News Today</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
      </ul>
    </div>
    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
</div>
  </div>
</nav>
  );
}
