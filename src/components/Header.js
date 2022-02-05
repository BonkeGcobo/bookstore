import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: 'Categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header className="theHeader">
      <div className="HeaderRight">
        <h1 className="Apptitle">Bookstore CMS</h1>
        <ul className="nav">
          {links.map((link) => (
            <li key={link.id} className="link">
              <NavLink to={link.path} activeClassName="active-link" className="tag" exact>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="user-icon">
        <FontAwesomeIcon icon={faUser} color="#0290ff" />
      </div>
    </header>
  );
};

export default Header;
