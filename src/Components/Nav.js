import React from 'react';

export default function Nav() {
  return (
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsKeeda.com</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
