import React from 'react';

function Navbar({ activePage, onNavLinkClick }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => onNavLinkClick('about')}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`}
            onClick={() => onNavLinkClick('resume')}
          >
            Resume
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === 'portfolio' ? 'active' : ''}`}
            onClick={() => onNavLinkClick('portfolio')}
          >
            Portfolio
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === 'blog' ? 'active' : ''}`}
            onClick={() => onNavLinkClick('blog')}
          >
            Blog
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === 'contact' ? 'active' : ''}`}
            onClick={() => onNavLinkClick('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;