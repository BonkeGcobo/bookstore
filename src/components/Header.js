import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: 'Categories',
      text: 'Categories',
    },
  ];

  return (
    <header className="theHeader">
      <div className="HeaderRight">
        <h1 className="title">Bookstore CMS</h1>
        <ul className="nav">
          {links.map((link) => (
            <li key={link.id} className="link">
              <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
