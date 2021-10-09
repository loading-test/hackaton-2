import React from "react";
import { Link } from "react-router-dom";

const NavBarContainer = () => {
  return (
    <header className="d-flex justify-content-center py-3 shadow">
      <ul className="nav nav-pills">
        <li>
          <Link to="/" className="nav-link">
            Главная
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="nav-link">
            Избранные
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBarContainer;
