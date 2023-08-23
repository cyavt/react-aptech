// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/user.png';

function Header() {
  return (
    <header>
      {/* Nav */}
      <div className="nav container">
        {/* Logo */}
        <Link
          to="/"
          className="logo"
        >
          Movie<span>Vennie</span>
        </Link>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="search"
            name=""
            id="search-input"
            placeholder="Search Movie"
          />
          <box-icon name="search" color="#ffffff"></box-icon>
        </div>

        {/* User */}
        <a
          href="#"
          className="user"
        >
          <img
            src={logo}
            alt=""
            className="user-img"
          />
        </a>

        {/* Navbar */}
        <div className="navbar">
          <Link
            to="/"
            className="nav-link nav-active"
          >
            {/*nav-active*/}
            <box-icon name="home" color="#ffffff" size="sm"></box-icon>
            <span className="nav-link-tittle">Home</span>
          </Link>
          <Link
            to="/popular"
            className="nav-link"
          >
            <box-icon type='solid' name='hot' color="#ffffff" size="sm"></box-icon>
            <span className="nav-link-tittle">Popular</span>
          </Link>
          <Link
            to="/nowplaying"
            className="nav-link"
          >
            <box-icon name="compass" color="#ffffff" size="sm"></box-icon>
            <span className="nav-link-tittle">Now Playing</span>
          </Link>
          <a
            href="#home"
            className="nav-link"
          >
            <box-icon name="tv" color="#ffffff" size="sm"></box-icon>
            <span className="nav-link-tittle">Movies</span>
          </a>
          <a
            href="#home"
            className="nav-link"
          >
            <box-icon name="heart" color="#ffffff" size="sm"></box-icon>
            <span className="nav-link-tittle">Favorite</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
